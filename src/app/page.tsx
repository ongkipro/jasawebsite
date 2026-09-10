import { BookFolioRenderer } from '@/components/book/BookFolioRenderer';
import { generateSheetSchema, CORE_FOLIO_SEO } from '@/lib/seo';

export default function HomePage() {
  const coverSeo = CORE_FOLIO_SEO.cover;
  const sheetSchema = generateSheetSchema(
    coverSeo.title,
    coverSeo.description,
    'cover'
  );

  return (
    <>
      <script
        id="folio-sheet-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sheetSchema) }}
      />
      <BookFolioRenderer initialSpreadIndex={0} />
    </>
  );
}
