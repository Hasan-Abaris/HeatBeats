'use client';

import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
  useRef,
} from 'react';
import WebinarDetailsPanel from './WebinarDetailsPanel';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const WebinarTopics = forwardRef(({ webinarData, focusTarget }, ref) => {
  const [sortOptions, setSortOptions] = useState(webinarData.map(() => 'date'));
  const [openStates, setOpenStates] = useState(
    webinarData.map((item) => item.webinars.map(() => false))
  );

  const cardRefs = useRef([]);

  const sortWebinars = (webinars, sortType) => {
    return [...webinars].sort((a, b) => {
      if (sortType === 'date') return new Date(a.date) - new Date(b.date);
      if (sortType === 'popular') return b.registrations - a.registrations;
      return 0;
    });
  };

  useImperativeHandle(ref, () => ({
    scrollTo({ topic, title }) {
      const topicIndex = webinarData.findIndex((t) => t.topic === topic);
      if (topicIndex === -1) return;

      const sorted = sortWebinars(
        webinarData[topicIndex].webinars,
        sortOptions[topicIndex]
      );
      const webinarIndex = sorted.findIndex((w) => w.title === title);
      if (webinarIndex === -1) return;

      setOpenStates((prev) =>
        prev.map((topicArr, i) =>
          i === topicIndex
            ? topicArr.map((_, j) => j === webinarIndex)
            : topicArr.map(() => false)
        )
      );

      setTimeout(() => {
        cardRefs.current[topicIndex]?.[webinarIndex]?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    },
  }));

  useEffect(() => {
    if (focusTarget?.topic && focusTarget?.title) {
      ref?.current?.scrollTo(focusTarget);
    }
  }, [focusTarget, ref]);

  const handleSortChange = (topicIndex, sortType) => {
    setSortOptions((prev) => {
      const updated = [...prev];
      updated[topicIndex] = sortType;
      return updated;
    });
  };

  const toggleOpen = (topicIndex, webinarIndex) => {
    setOpenStates((prev) =>
      prev.map((topicArr, i) =>
        i === topicIndex
          ? topicArr.map((open, j) => (j === webinarIndex ? !open : open))
          : topicArr.map(() => false)
      )
    );
  };

  return (
    <div className="flex flex-col gap-6 px-4 items-center">
      {webinarData.map((item, topicIndex) => {
        const sortedWebinars = sortWebinars(
          item.webinars,
          sortOptions[topicIndex]
        );

        return (
          <Card
            key={topicIndex}
            className="w-full mb-20 shadow-md bg-gray-50 border border-gray-200 rounded-lg p-4"
          >
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 px-4">
                <CardTitle className="text-2xl text-black flex items-center gap-2">
                  <div className="flex items-center justify-center w-14 h-14 bg-blue-200 rounded-full p-2">
                    <img
                      src={item.icon}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {item.topic}
                </CardTitle>

                <div className="flex items-center gap-4 mt-2 md:mt-0">
                  <label className="text-sm text-muted-foreground">
                    Sort by:
                  </label>
                  <div className="flex items-center gap-2">
                    <label className="flex items-center text-sm text-gray-700">
                      <input
                        type="radio"
                        name={`sort-${topicIndex}`}
                        className="mr-1 accent-blue-600"
                        checked={sortOptions[topicIndex] === 'date'}
                        onChange={() => handleSortChange(topicIndex, 'date')}
                      />
                      Upcoming Date
                    </label>
                    <label className="flex items-center text-sm text-gray-700">
                      <input
                        type="radio"
                        name={`sort-${topicIndex}`}
                        className="mr-1 accent-blue-600"
                        checked={sortOptions[topicIndex] === 'popular'}
                        onChange={() => handleSortChange(topicIndex, 'popular')}
                      />
                      Most Popular
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 items-center">
                {sortedWebinars.map((webinar, webinarIndex) => {
                  const isOpen =
                    openStates[topicIndex]?.[webinarIndex] || false;

                  return (
                    <Card
                      key={webinarIndex}
                      ref={(el) => {
                        if (!cardRefs.current[topicIndex]) {
                          cardRefs.current[topicIndex] = [];
                        }
                        cardRefs.current[topicIndex][webinarIndex] = el;
                      }}
                      className="w-full md:w-[80%] bg-white border-gray-200 shadow-sm rounded-lg overflow-hidden"
                    >
                      <div
                        className="cursor-pointer hover:bg-gray-50 transition-all duration-300"
                        onClick={() => toggleOpen(topicIndex, webinarIndex)}
                      >
                        <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-6 pt-6 pb-4 border-b border-gray-200">
                          <div className="flex flex-col md:flex-row md:items-center gap-4 flex-1">
                            <h3 className="text-base md:text-lg font-semibold text-black">
                              {webinar.title}
                            </h3>
                            <p className="text-sm text-muted-foreground flex items-center">
                              <span className="w-4 h-4 inline-block mr-1">
                                <img
                                  src="/images/user.svg"
                                  alt="User Icon"
                                  className="w-full h-full"
                                />
                              </span>
                              {webinar.registrations} registered
                            </p>
                          </div>
                          <div className="flex flex-col items-end justify-center gap-2 text-sm text-muted-foreground text-right">
                            <p>
                              {webinar.date} | {webinar.time}
                            </p>
                            <button className="border border-blue-600 text-blue-600 font-semibold py-2 px-4 rounded hover:bg-blue-50 transition text-sm">
                              REGISTER NOW
                            </button>
                          </div>
                        </CardHeader>
                      </div>

                      {isOpen && (
                        <CardContent className="p-6 border-t border-gray-100 bg-gray-50 transition-all duration-300">
                          <WebinarDetailsPanel
                            description={webinar.description}
                            agenda={webinar.agenda}
                            facts={webinar.facts}
                          />
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
});

export default WebinarTopics;