"use client";

import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
  useRef,
} from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const WebinarTopics = forwardRef(({ webinarData }, ref) => {
  const [sortOptions, setSortOptions] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    setSortOptions(webinarData.map(() => "date"));
  }, [webinarData]);

  const sortWebinars = (webinars, sortType) => {
    return [...webinars].sort((a, b) => {
      if (sortType === "date")
        return new Date(a.webinar_datetime) - new Date(b.webinar_datetime);
      if (sortType === "popular")
        return b.registrations_count - a.registrations_count;
      return 0;
    });
  };

  const handleSortChange = (topicIndex, sortType) => {
    setSortOptions((prev) => {
      const updated = [...prev];
      updated[topicIndex] = sortType;
      return updated;
    });
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
                      alt={`${item.topic} icon`}
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
                        checked={sortOptions[topicIndex] === "date"}
                        onChange={() => handleSortChange(topicIndex, "date")}
                      />
                      Upcoming Date
                    </label>
                    <label className="flex items-center text-sm text-gray-700">
                      <input
                        type="radio"
                        name={`sort-${topicIndex}`}
                        className="mr-1 accent-blue-600"
                        checked={sortOptions[topicIndex] === "popular"}
                        onChange={() =>
                          handleSortChange(topicIndex, "popular")
                        }
                      />
                      Most Popular
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 items-center">
                {sortedWebinars.map((webinar, webinarIndex) => {
                  const dt = new Date(webinar.webinar_datetime);
                  const dateStr = dt.toLocaleDateString();
                  const timeStr = dt.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  });

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
                      <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-6 pt-6 pb-4 border-b border-gray-200">
                        <div className="flex flex-col md:flex-row md:items-center gap-4 flex-1">
                          <Link
                            href={`/webinar/${webinar.id}`}
                            className="text-base md:text-lg font-semibold text-black hover:text-blue-600 transition"
                          >
                            {webinar.name}
                          </Link>
                          <p className="text-sm text-muted-foreground flex items-center">
                            <span className="w-4 h-4 inline-block mr-1">
                              <img
                                src="/images/user.svg"
                                alt="User Icon"
                                className="w-full h-full"
                              />
                            </span>
                            {webinar.registrations_count} registered
                          </p>
                        </div>
                        <div className="flex flex-col items-end justify-center gap-2 text-sm text-muted-foreground text-right">
                          <p>
                            {dateStr} | {timeStr}
                          </p>
                          <Link
                            href={`/webinar/${webinar.id}`}
                            className="border border-blue-600 text-blue-600 font-semibold py-2 px-4 rounded hover:bg-blue-50 transition text-sm"
                          >
                            REGISTER NOW
                          </Link>
                        </div>
                      </CardHeader>
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
