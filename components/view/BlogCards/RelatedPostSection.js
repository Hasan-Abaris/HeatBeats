import { relatedPostSection } from '@/data/blogcards';

export default function RelatedPostSection() {
  const { introText, relatedPostText, relatedPostLink, footerText } =
    relatedPostSection;

  return (
    <div className="max-w-3xl mx-auto text-sm text-gray-700 border-t border-b py-6 mb-10">
      <p className="mb-2">{introText}</p>
      <p className="font-semibold mb-1">
        Related Post:{' '}
        <a href={relatedPostLink} className="text-blue-700 font-bold underline">
          {relatedPostText}
        </a>
      </p>
      <p className="font-bold text-gray-800">{footerText}</p>
    </div>
  );
}
