'use client';

import Image from 'next/image';
import styles from './project.module.css';
import { useProject } from '@/hooks/useProject';
import { Header } from "@/components/layout/header";
import { useTranslate } from '@/hooks/useTranslate';
import { CaseStudySection } from '@/components/sections/case-study-section';
import { ProjectOverviewSection } from '@/components/sections/project-overview-section';
import { useState } from 'react';
import { ArrowUpRightIcon, ArticleNyTimesIcon, BooksIcon, GridFourIcon, Icon } from '@phosphor-icons/react';
import { Tab } from '@/components/buttons/tab';
import { Button } from '@/components/buttons/button';
import { Platform, ProjectLink } from '@/types/project';

type TabOption = 'overview' | 'caseStudies' | 'description';

type MobileTabButton = {
  tab: TabOption;
  Icon: Icon;
  id: string;
  panelId: string;
}

export function Project() {
  const { t } = useTranslate();
  const { project, getDescription } = useProject();

  const [selectedTab, setSelectedTab] = useState<TabOption>('description');

  const mobileTabs: MobileTabButton[] = [
    {
      id: 'tab-description',
      tab: 'description',
      Icon: ArticleNyTimesIcon,
      panelId: 'Description_Panel'
    },
    {
      id: 'tab-overview',
      tab: 'overview',
      Icon: GridFourIcon,
      panelId: 'ProjectOverview_Section'
    },
    {
      id: 'tab-case-studies',
      tab: 'caseStudies',
      Icon: BooksIcon,
      panelId: 'CaseStudy_Section'
    },
  ];

  const webLink: ProjectLink | undefined = project.links.filter((project) => project.platform === Platform.WEB)?.at(0) ?? project.links[0];

  return (
    <>
      <Header showFullHeader={false} />
      <div
        className={styles.projectCover}
      >
        <Image
          src={project.coverImage.url ?? ''}
          alt="cover"
          fill
          placeholder="empty"
          sizes="(max-width: 768px) 100vw, auto"
          priority={true}
        />
        <span aria-hidden className="sectionTransition bottom"></span>
      </div>
      <main aria-labelledby="ProjectTitle" className={styles.projectContainer}>
        <header className={styles.projectMainDetails}>
          <h1 id="ProjectTitle">{project?.title}</h1>
          <div>
            <p>{t('ProjectPage.readingTime').replaceAll('{time}', (project.readingTime ?? 0).toString())}</p>
            <span></span>
            <p>{t(`ProjectPage.Size.${project.size}`)}</p>
          </div>
          <p className={styles.projectFullDescription}>{getDescription('fullDescription')}</p>
          <Button component="a" href={webLink.url} theme="outline">
            {t('ProjectPage.linkButtonLabel')}
            <ArrowUpRightIcon size={24} aria-hidden weight="bold" />
          </Button>
        </header>
        <section className={`${styles.mobileTabsContainer} show-mobile`}>
          <div aria-label="Project Details" className={`${styles.tabsGroupList} ${selectedTab}`}>
            <div role="tablist" className={`${selectedTab}`}>
              {mobileTabs.map((tab) => {
                return (
                  <Tab
                    key={tab.tab}
                    Icon={tab.Icon}
                    id={tab.id}
                    aria-controls={tab.panelId}
                    isChecked={tab.tab === selectedTab}
                    label={t(`ProjectPage.Sections.${tab.tab}`)}
                    onClick={() => setSelectedTab(tab.tab)}
                  />
                )
              })}
            </div>
          </div>
          <ProjectOverviewSection role="tabpanel" tabIndex={0} hidden={selectedTab !== 'overview'} />
          <CaseStudySection role="tabpanel" tabIndex={0} hidden={selectedTab !== 'caseStudies'} />
          <section id="Description_Panel" role="tabpanel" tabIndex={0} hidden={selectedTab !== 'description'}>
            <p className={styles.projectFullDescription}>{getDescription('fullDescription')}</p>
          </section>
        </section>
        <ProjectOverviewSection />
        <CaseStudySection />
      </main>
    </>
  )
}