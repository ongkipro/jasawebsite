'use client';

import React, { useState } from 'react';
import { BookShell } from '@/components/book/BookShell';
import { CoverSheet } from '@/components/sheets/CoverSheet';
import { TocSheet } from '@/components/sheets/TocSheet';
import { ComproSheetLeft, ComproSheetRight } from '@/components/sheets/ComproSheet';
import { SalesSheetLeft, SalesSheetRight } from '@/components/sheets/SalesSheet';
import { CommerceSheetLeft, CommerceSheetRight } from '@/components/sheets/CommerceSheet';
import { ShopifySheetLeft, ShopifySheetRight } from '@/components/sheets/ShopifySheet';
import { CustomAppSheetLeft, CustomAppSheetRight } from '@/components/sheets/CustomAppSheet';
import {
  PortfolioGallerySheetLeft,
  PortfolioGallerySheetRight,
} from '@/components/sheets/PortfolioGallerySheet';
import {
  MaintenanceSheetLeft,
  MaintenanceSheetRight,
} from '@/components/sheets/MaintenanceSheet';
import { NicheCatalogSheet } from '@/components/sheets/NicheCatalogSheet';
import { ColophonSheet } from '@/components/sheets/ColophonSheet';

export interface BookFolioRendererProps {
  initialSpreadIndex?: number;
}

export function BookFolioRenderer({
  initialSpreadIndex = 0,
}: BookFolioRendererProps) {
  // State for selected portfolio item in Spread 05
  const [selectedProjectId, setSelectedProjectId] = useState('samira-travel-umroh');

  const renderLeftSheet = (spreadIndex: number) => {
    switch (spreadIndex) {
      case 0:
        return <CoverSheet />;
      case 1:
        return <ComproSheetLeft />;
      case 2:
        return <SalesSheetLeft />;
      case 3:
        return <ShopifySheetLeft />;
      case 4:
        return <CustomAppSheetLeft />;
      case 5:
        return (
          <PortfolioGallerySheetLeft
            selectedId={selectedProjectId}
            onSelectProject={setSelectedProjectId}
          />
        );
      case 6:
        return <MaintenanceSheetLeft />;
      case 7:
        return <NicheCatalogSheet />;
      default:
        return <CoverSheet />;
    }
  };

  const renderRightSheet = (spreadIndex: number) => {
    switch (spreadIndex) {
      case 0:
        return <TocSheet />;
      case 1:
        return <ComproSheetRight />;
      case 2:
        return <SalesSheetRight />;
      case 3:
        return <ShopifySheetRight />;
      case 4:
        return <CustomAppSheetRight />;
      case 5:
        return <PortfolioGallerySheetRight selectedId={selectedProjectId} />;
      case 6:
        return <MaintenanceSheetRight />;
      case 7:
        return <ColophonSheet />;
      default:
        return <TocSheet />;
    }
  };

  return (
    <BookShell
      initialSpreadIndex={initialSpreadIndex}
      renderLeftSheet={renderLeftSheet}
      renderRightSheet={renderRightSheet}
    />
  );
}
