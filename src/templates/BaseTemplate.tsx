'use client';

import '@copilotkit/react-ui/styles.css';

import { CopilotKit } from '@copilotkit/react-core';
import { CopilotSidebar } from '@copilotkit/react-ui';
import { useTranslations } from 'next-intl';

import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full px-20 py-10 text-gray-700 antialiased">
      <CopilotKit url="/api/copilotkit/">
        <CopilotSidebar
          labels={{
            title: 'Your Assistant',
            initial: 'Hi! 👋 How can I assist you today?',
          }}
        >
          <div className="mx-auto max-w-screen-md lg:max-w-full">
            <header className="border-b border-gray-300 px-10">
              <div className="pt-8">
                <h1 className="text-3xl font-bold text-gray-900">
                  {AppConfig.name}
                </h1>
                <h2 className="text-xl">{t('description')}</h2>
              </div>

              <div className="flex justify-between px-10">
                <nav>
                  <ul className="flex flex-wrap gap-x-3 text-xl">
                    {props.leftNav}
                  </ul>
                </nav>

                <nav>
                  <ul className="flex flex-wrap gap-x-3 text-xl">
                    {props.rightNav}
                  </ul>
                </nav>
              </div>
            </header>

            <main>{props.children}</main>
          </div>
        </CopilotSidebar>
      </CopilotKit>
    </div>
  );
};

export { BaseTemplate };
