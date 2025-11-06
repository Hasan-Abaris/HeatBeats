'use client';
import React, { useState } from 'react';

export default function Settingpage() {
  const [activeTab, setActiveTab] = useState('General');
  const [communitySubTab, setCommunitySubTab] = useState('Content controls');
  const [uploadSubTab, setUploadSubTab] = useState('Basic info');
  const [channelSubTab, setChannelSubTab] = useState('Basic info');
  const [keywords, setKeywords] = useState([
    '#InternetPersonalities',
    '#FamousPeople #Biography',
    '#Documentary',
    '#LifeStory #SuccessStory',
    '#InternetCelebrities',
    '#SocialMediaStars',
    '#InfluencerBiography',
    '#FamousInternetPersonalities',
  ]);
  const [newKeyword, setNewKeyword] = useState('');

  // Updated tabs with new ones
  const tabs = [
    'General',
    'Channel',
    'Upload defaults',
    'Permissions',
    'Community moderation',
    'Creator demographics',
    'Agreements',
    'Bank Details',
    'Recharge',
    'Wallet',
    'Blocked List',      // New
    'Coin History',      // New
    'Withdraw History',  // New
    'Security',
    'Notifications',
  ];

  // Add/remove keywords
  const handleAddKeyword = (e) => {
    e.preventDefault();
    if (newKeyword.trim() !== '') {
      setKeywords([...keywords, newKeyword.trim()]);
      setNewKeyword('');
    }
  };
  const handleRemoveKeyword = (k) =>
    setKeywords(keywords.filter((x) => x !== k));

  /** -------------------- Community Moderation -------------------- */
  const renderCommunityModeration = () => (
    <div>
      <div className="flex border-b mb-6">
        {['Content controls', 'User management'].map((subTab) => (
          <button
            key={subTab}
            className={`mr-6 pb-2 text-sm font-medium ${
              communitySubTab === subTab
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setCommunitySubTab(subTab)}
          >
            {subTab}
          </button>
        ))}
      </div>

      {communitySubTab === 'Content controls' ? (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Comments and posts</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Comments</label>
              <p className="border rounded-md p-2 bg-gray-50">On</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Moderation</label>
              <p className="border rounded-md p-2 bg-gray-50">Basic</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Blocked words</h3>
            <textarea
              rows="3"
              className="border rounded-md w-full p-2 bg-gray-50 text-sm"
              placeholder="Separate words with commas..."
            />
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-semibold mb-4">User management</h3>
          <input
            type="text"
            className="border rounded-md p-2 w-full bg-gray-50"
            placeholder="Add moderator channel URL"
          />
        </div>
      )}
    </div>
  );

  /** -------------------- Bank Details Tab -------------------- */
  const renderBankDetails = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Bank Account Information</h3>
      <p className="text-sm text-gray-600">
        Update or verify your registered bank details below for withdrawals and prize deposits.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">Bank Name</label>
          <input
            type="text"
            defaultValue="State Bank of India"
            className="border rounded-md p-2 w-full bg-gray-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Account Holder Name</label>
          <input
            type="text"
            defaultValue="Zunaira Khan"
            className="border rounded-md p-2 w-full bg-gray-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Account Number</label>
          <input
            type="text"
            defaultValue="XXXXXXXXXXXX1234"
            className="border rounded-md p-2 w-full bg-gray-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">IFSC Code</label>
          <input
            type="text"
            defaultValue="SBIN0000456"
            className="border rounded-md p-2 w-full bg-gray-50"
          />
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Save Changes
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
          Cancel
        </button>
      </div>
    </div>
  );

  /** -------------------- Recharge Tab -------------------- */
  const renderRecharge = () => (
    <div
      className="w-full sm:max-w-3xl mt-20 sm:p-6 mb-6 rounded-lg sm:min-h-[820px]"
      style={{ boxShadow: 'rgba(0, 0, 0, 0.06) 0px 1.22px 14.55px 0px' }}
    >
      <div className="flex flex-col gap-3 p-6">
        <h1 className="text-lg font-bold text-dark sm:block hidden">Recharge</h1>
        <h3 className="text-main-green text-base">Upgrade to Premium &amp; Unlock Full Access</h3>
        <p className="text-gray text-sm">
          Get the Premium Plan for unlimited access to advanced features and exclusive content.
        </p>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-6 mt-4 overflow-y-auto scrollbar-hide">
          {[
            { coins: 50, price: '$50' },
            { coins: 5000, price: '$200' },
            { coins: 3000, price: '$150' },
            { coins: 1000, price: '$100' },
            { coins: 500, price: '$50' },
            { coins: 300, price: '$30' },
            { coins: 250, price: '$25' },
            { coins: 200, price: '$20' },
            { coins: 150, price: '$15' },
            { coins: 100, price: '$10' },
            { coins: 50, price: '$5' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-3 h-fit py-8 px-12 border rounded-lg cursor-pointer transition border-main-green/[0.36]"
            >
              <img
                alt={`${item.coins} Coin`}
                loading="lazy"
                width="50"
                height="50"
                decoding="async"
                className="rounded-lg"
                src="/_next/image?url=%2Fprofile%2Fcoin.png&w=128&q=75"
                srcSet="/_next/image?url=%2Fprofile%2Fcoin.png&w=64&q=75 1x, /_next/image?url=%2Fprofile%2Fcoin.png&w=128&q=75 2x"
                style={{ color: 'transparent' }}
              />
              <div className="flex flex-col items-center">
                <span className="font-medium text-sm text-dark">{item.coins} Coins</span>
                <span className="text-sm text-main-green">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center p-4"></div>
    </div>
  );

  /** -------------------- Wallet Tab -------------------- */
  const renderWallet = () => (
    <div
      className="w-full sm:max-w-3xl mt-20 sm:p-6 mb-6 rounded-lg sm:min-h-[820px]"
      style={{ boxShadow: 'rgba(0, 0, 0, 0.06) 0px 1.22px 14.55px 0px' }}
    >
      <h2 className="text-dark px-6 pt-6 font-semibold text-lg">Wallet</h2>
      <div className="sm:px-6 space-y-6 py-4">
        {/* Total Coins Card */}
        <div
          className="border border-main-green rounded-xl px-4 py-3 flex-shrink-0 relative overflow-hidden"
          style={{
            background: 'linear-gradient(141.72deg, rgb(35, 156, 87) -1.01%, rgb(1, 159, 200) 103.86%)',
          }}
        >
          <div className="absolute inset-0 opacity-90 pointer-events-none">
            <img
              alt="ellipse"
              loading="lazy"
              width="60"
              height="60"
              decoding="async"
              className="absolute -top-2 right-0"
              src="/_next/image?url=%2Fgift%2FTopRightEllipse.png&w=128&q=75"
              srcSet="/_next/image?url=%2Fgift%2FTopRightEllipse.png&w=64&q=75 1x, /_next/image?url=%2Fgift%2FTopRightEllipse.png&w=128&q=75 2x"
              style={{ color: 'transparent' }}
            />
            <img
              alt="ellipse"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              className="absolute bottom-0 left-8"
              src="/_next/image?url=%2Fgift%2FLeftBottom.png&w=256&q=75"
              srcSet="/_next/image?url=%2Fgift%2FLeftBottom.png&w=128&q=75 1x, /_next/image?url=%2Fgift%2FLeftBottom.png&w=256&q=75 2x"
              style={{ color: 'transparent' }}
            />
            <img
              alt="ellipse"
              loading="lazy"
              width="80"
              height="80"
              decoding="async"
              className="absolute top-0 left-0"
              src="/_next/image?url=%2Fgift%2FLeftTop.png&w=256&q=75"
              srcSet="/_next/image?url=%2Fgift%2FLeftTop.png&w=96&q=75 1x, /_next/image?url=%2Fgift%2FLeftTop.png&w=256&q=75 2x"
              style={{ color: 'transparent' }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h3 className="text-primary text-xs sm:text-sm font-semibold">Total Available Coins</h3>
              <div className="flex gap-2 place-items-center">
                <img
                  alt="info"
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  src="/_next/image?url=%2Fgift%2Finformation.png&w=32&q=75"
                  srcSet="/_next/image?url=%2Fgift%2Finformation.png&w=16&q=75 1x, /_next/image?url=%2Fgift%2Finformation.png&w=32&q=75 2x"
                  style={{ color: 'transparent' }}
                />
                <p className="text-dark sm:text-[13px] text-xs font-medium">Note: 1 coin = $ 0.020</p>
              </div>
            </div>
            <div className="flex gap-1.5 items-center">
              <img
                alt="coin"
                loading="lazy"
                width="40"
                height="40"
                decoding="async"
                src="/_next/image?url=%2Fprofile%2Fcoin.png&w=96&q=75"
                srcSet="/_next/image?url=%2Fprofile%2Fcoin.png&w=48&q=75 1x, /_next/image?url=%2Fprofile%2Fcoin.png&w=96&q=75 2x"
                style={{ color: 'transparent' }}
              />
              <p className="text-primary text-lg">15209 Coins</p>
            </div>
            <div className="bg-[#FCD227] rounded-xl">
              <h2 className="text-dark font-semibold px-4 sm:text-sm text-xs py-0.5 text-center">
                Available Amount is $304.18 = 15209 coins
              </h2>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-5 w-full">
          <button className="flex items-center justify-center gap-2 w-1/2 bg-main-green border border-main-green rounded-xl py-2.5 px-8 text-sm text-primary cursor-pointer">
            <img
              alt="recharge"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              src="/_next/image?url=%2Fgift%2FRecharge.png&w=48&q=75"
              srcSet="/_next/image?url=%2Fgift%2FRecharge.png&w=32&q=75 1x, /_next/image?url=%2Fgift%2FRecharge.png&w=48&q=75 2x"
              style={{ color: 'transparent' }}
            />
            Recharge
          </button>
          <button className="flex items-center justify-center gap-2 w-1/2 border border-main-green rounded-xl py-2.5 px-8 text-sm text-main-green cursor-pointer">
            <img
              alt="withdraw"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              src="/_next/image?url=%2Fgift%2FWithdraw.png&w=48&q=75"
              srcSet="/_next/image?url=%2Fgift%2FWithdraw.png&w=32&q=75 1x, /_next/image?url=%2Fgift%2FWithdraw.png&w=48&q=75 2x"
              style={{ color: 'transparent' }}
            />
            Withdraw
          </button>
        </div>

        {/* Latest Gift Sender */}
        <div className="border border-main-green/[0.36] rounded-md px-4 py-4">
          <h2 className="text-dark text-base font-semibold">Latest Gift Sender</h2>
          <div className="flex overflow-x-auto gap-2 py-4">
            <div className="flex flex-col gap-1 px-2 items-center flex-shrink-0">
              <img
                alt="kevintemp"
                loading="lazy"
                width="45"
                height="45"
                decoding="async"
                className="rounded-full"
                src="/_next/image?url=https%3A%2F%2Freelboost.online%2Fuploads%2Favatar%2Fmale-avatar-5.png&w=96&q=75"
                srcSet="/_next/image?url=https%3A%2F%2Freelboost.online%2Fuploads%2Favatar%2Fmale-avatar-5.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Freelboost.online%2Fuploads%2Favatar%2Fmale-avatar-5.png&w=96&q=75 2x"
                style={{ color: 'transparent' }}
              />
              <p className="text-xs text-dark truncate w-14 text-center">kevintemp</p>
            </div>
          </div>
        </div>

        {/* Payment History */}
        <div className="border border-main-green/[0.36] rounded-md px-4 py-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-dark text-base font-semibold">Payment History</h2>
            <button className="text-gray text-xs hover:underline cursor-pointer">See all</button>
          </div>
          <div className="flex bg-main-green/[0.04] rounded-xl overflow-hidden mb-4">
            <button className="flex-1 py-2 text-sm font-medium transition cursor-pointer text-main-green">
              Recharge
            </button>
            <div className="w-px h-4 my-2 bg-gray-300 self-stretch"></div>
            <button className="flex-1 py-2 text-sm rounded-xl font-medium transition cursor-pointer text-gray">
              Withdraw History
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { amount: '+$200', date: '24/6/2025 • 6:09:48 pm' },
              { amount: '+$200', date: '24/6/2025 • 6:09:48 pm' },
              { amount: '+$150', date: '24/6/2025 • 6:09:48 pm' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between border border-main-green/[0.36] rounded-lg px-3 py-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C7EAD0] flex items-center justify-center">
                    <img
                      alt="recharge"
                      loading="lazy"
                      width="15"
                      height="15"
                      decoding="async"
                      src="/_next/image?url=%2Fgift%2Freceived.png&w=32&q=75"
                      srcSet="/_next/image?url=%2Fgift%2Freceived.png&w=16&q=75 1x, /_next/image?url=%2Fgift%2Freceived.png&w=32&q=75 2x"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-dark text-xs font-medium">Recharge Coin</p>
                    <p className="text-gray text-xs">• {item.date}</p>
                  </div>
                </div>
                <p className="text-sm font-medium text-green">{item.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  /** -------------------- Blocked List Tab -------------------- */
  const renderBlockedList = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Blocked Users</h3>
      <p className="text-sm text-gray-600">
        Users you have blocked will not be able to send gifts, comment, or interact with your content.
      </p>
      <div className="border rounded-lg p-4 bg-gray-50">
        <p className="text-sm text-gray-500 italic">No users blocked yet.</p>
      </div>
    </div>
  );

  /** -------------------- Coin History Tab -------------------- */
  const renderCoinHistory = () => (
    <div className="space-y-2">
      <div className="flex justify-between place-items-center px-6">
        <h2 className="pb-4 pt-6 text-dark font-semibold text-lg">Coin History</h2>
        <div className="relative inline-block">
          <button
            type="button"
            className="border cursor-pointer border-gray rounded-xl px-3 py-0.5 text-gray text-xs flex items-center gap-2 bg-primary"
          >
            31 Oct – 06 Nov
            <img
              alt="down"
              loading="lazy"
              width="10"
              height="10"
              decoding="async"
              src="/_next/image?url=%2Fgift%2FDateArrowDown.png&w=32&q=75"
              srcSet="/_next/image?url=%2Fgift%2FDateArrowDown.png&w=16&q=75 1x, /_next/image?url=%2Fgift%2FDateArrowDown.png&w=32&q=75 2x"
              style={{ color: 'transparent' }}
            />
          </button>
        </div>
      </div>

      {/* History Items */}
      {[
        {
          user: 'kevintemp',
          action: 'sent a gift',
          coins: 168,
          date: '24/6/2025 • 6:09:48 pm',
          type: 'received',
          borderColor: '#C7EAD0',
          icon: '/_next/image?url=%2Fgift%2Freceived.png&w=32&q=75',
        },
        {
          user: 'You sent a gift to kevintemp',
          coins: 168,
          date: '24/6/2025 • 6:09:48 pm',
          type: 'sent',
          borderColor: '#FFC9C9',
          icon: '/_next/image?url=%2Fgift%2Fwithdrawn.png&w=32&q=75',
        },
        {
          user: 'kevintemp',
          action: 'sent a gift',
          coins: 120,
          date: '24/6/2025 • 6:09:48 pm',
          type: 'received',
          borderColor: '#C7EAD0',
          icon: '/_next/image?url=%2Fgift%2Freceived.png&w=32&q=75',
        },
        {
          user: 'You sent a gift to kevintemp',
          coins: 100,
          date: '24/6/2025 • 6:09:48 pm',
          type: 'sent',
          borderColor: '#FFC9C9',
          icon: '/_next/image?url=%2Fgift%2Fwithdrawn.png&w=32&q=75',
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className={`border p-3 rounded-xl flex justify-between mx-6 border-[${item.borderColor}]`}
        >
          <div className="flex gap-3 items-center">
            <img
              alt="gift"
              loading="lazy"
              width="45"
              height="45"
              decoding="async"
              src="/_next/image?url=%2Fgift%2FgiftBox.png&w=96&q=75"
              srcSet="/_next/image?url=%2Fgift%2FgiftBox.png&w=48&q=75 1x, /_next/image?url=%2Fgift%2FgiftBox.png&w=96&q=75 2x"
              style={{ color: 'transparent' }}
            />
            <div className="flex flex-col gap-1">
              <p className="text-dark font-semibold text-sm cursor-pointer">
                {item.user} {item.action && <span className="font-medium text-dark">{item.action}</span>}
              </p>
              <div className="flex gap-2 items-center">
                <img
                  alt=""
                  loading="lazy"
                  width="15"
                  height="15"
                  decoding="async"
                  src={item.icon}
                  srcSet={`${item.icon.split('&')[0]}&w=16&q=75 1x, ${item.icon.split('&')[0]}&w=32&q=75 2x`}
                  style={{ color: 'transparent' }}
                />
                <p className="text-xs text-gray">• {item.date}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <img
              alt="coin"
              loading="lazy"
              width="20"
              height="20"
              decoding="async"
              src="/_next/image?url=%2Fprofile%2Fcoin.png&w=48&q=75"
              srcSet="/_next/image?url=%2Fprofile%2Fcoin.png&w=32&q=75 1x, /_next/image?url=%2Fprofile%2Fcoin.png&w=48&q=75 2x"
              style={{ color: 'transparent' }}
            />
            <p className={`text-xs ${item.type === 'received' ? 'text-green' : 'text-red'}`}>
              {item.type === 'received' ? '+' : '-'}{item.coins} Coins
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  /** -------------------- Withdraw History Tab -------------------- */
  const renderWithdrawHistory = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Withdraw History</h3>
      <p className="text-sm text-gray-600">
        View all your past withdrawal requests and their status.
      </p>
      <div className="border rounded-lg p-4 bg-gray-50">
        <p className="text-sm text-gray-500 italic">No withdrawals yet.</p>
      </div>
    </div>
  );

  /** -------------------- Main Tab Content -------------------- */
  const renderTabContent = () => {
    switch (activeTab) {
      case 'General':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Default units</h3>
            <label className="block text-sm font-medium mb-2">Currency</label>
            <select className="border rounded-md p-2 w-60 bg-gray-50">
              <option>INR – Indian Rupee</option>
              <option>USD – US Dollar</option>
              <option>EUR – Euro</option>
            </select>
          </div>
        );

      case 'Channel':
        return (
          <div>
            <div className="flex border-b mb-6">
              {['Basic info', 'Advanced settings', 'Feature eligibility'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setChannelSubTab(tab)}
                  className={`mr-6 pb-2 text-sm font-medium ${
                    channelSubTab === tab
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {channelSubTab === 'Basic info' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Country of residence</label>
                  <select className="border rounded-md p-2 w-80 bg-gray-50">
                    <option>India</option>
                    <option>United States</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Keywords</label>
                  <div className="flex flex-wrap gap-2 border p-3 rounded-md bg-white min-h-[90px]">
                    {keywords.map((keyword) => (
                      <div
                        key={keyword}
                        className="flex items-center bg-gray-100 text-sm px-2 py-1 rounded-full"
                      >
                        {keyword}
                        <button
                          onClick={() => handleRemoveKeyword(keyword)}
                          className="ml-2 text-gray-500 hover:text-gray-700"
                        >
                          X
                        </button>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleAddKeyword} className="mt-3 flex gap-2">
                    <input
                      type="text"
                      className="border rounded-md p-2 w-72 text-sm bg-gray-50"
                      placeholder="Add keyword (e.g. #Biography)"
                      value={newKeyword}
                      onChange={(e) => setNewKeyword(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
                    >
                      Add
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        );

      case 'Upload defaults':
        return (
          <div>
            <div className="flex border-b mb-6">
              {['Basic info', 'Advanced settings'].map((subTab) => (
                <button
                  key={subTab}
                  onClick={() => setUploadSubTab(subTab)}
                  className={`mr-6 pb-2 text-sm font-medium ${
                    uploadSubTab === subTab
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {subTab}
                </button>
              ))}
            </div>

            {uploadSubTab === 'Basic info' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <input
                    type="text"
                    className="border rounded-md w-full p-2 bg-gray-50"
                    placeholder="Add a title that describes your video"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    rows="4"
                    className="border rounded-md w-full p-2 bg-gray-50"
                    placeholder="Tell viewers about your video"
                  />
                </div>
              </div>
            )}
          </div>
        );

      case 'Community moderation':
        return renderCommunityModeration();

      case 'Bank Details':
        return renderBankDetails();

      case 'Recharge':
        return renderRecharge();

      case 'Wallet':
        return renderWallet();

      case 'Blocked List':
        return renderBlockedList();

      case 'Coin History':
        return renderCoinHistory();

      case 'Withdraw History':
        return renderWithdrawHistory();

      case 'Creator demographics':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Help make YouTube more inclusive</h3>
            <p className="text-sm text-gray-600">
              Provide demographic info to help improve creator diversity.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Take survey</button>
          </div>
        );

      default:
        return <p>Coming soon...</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
        </div>

        {/* Tabs */}
        <nav className="border-t bg-gray-50">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-4 px-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 pt-3 text-sm font-medium border-b-2 transition ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Tab Content */}
      <main className="max-w-7xl mx-auto p-8 bg-white mt-6 rounded-xl shadow-sm">
        {renderTabContent()}
      </main>
    </div>
  );
}