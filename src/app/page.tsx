import Image from "next/image";
import { get } from "@vercel/edge-config";
import { redirect } from "next/navigation";
import { Github, Instagram } from "lucide-react";

export const dynamic = "force-dynamic",
  runtime = "edge";

function XIcon() {
  return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 20 20"
        stroke="none"
        fill="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        className="lucide lucide-x"
        aria-label="X Icon"
      >
        <path d="M14.773 2.5h2.545l-5.56 6.354 6.54 8.646h-5.12l-4.01-5.244-4.59 5.244H2.032l5.946-6.796L1.704 2.5h5.25l3.626 4.793L14.773 2.5zm-.893 13.477h1.41L6.19 3.943H4.676l9.204 12.034z"></path>
      </svg>
  );
}



function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-1 mb-3 w-full max-w-3xl rounded-md border backdrop-blur-sm transition-all hover:scale-105 border-white/10 bg-zinc-900/20"
    >
      <div className="flex w-full text-center">
        <div className="w-10 h-10">
          {image && (
            <Image
              className="rounded-xs"
              alt={title}
              src={image}
              width={40}
              height={40}
            />
          )}
        </div>
        <h2 className="flex justify-center items-center -ml-10 w-full font-semibold text-white">
          {title}
        </h2>
      </div>
    </a>
  );
}

interface Data {
  name: string;
  avatar: string;
  links: Link[];
  socials: Social[];
}

interface Link {
  href: string;
  title: string;
  image?: string;
}

interface Social {
  href: string;
  title: string;
}

export default async function HomePage() {
  const data: Data | undefined = await get("linktree");

  if (!data) {
    // not working yet https://github.com/vercel/next.js/issues/44232
    redirect("https://educalvolopez.com");
  }

  return (
    <div className="flex flex-col justify-center items-center px-8 mx-auto mt-16 w-full">
      <Image
        priority
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="mt-4 mb-8 text-xl font-bold text-white">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <div className="flex gap-4 items-center mt-8 text-white">
        {data.socials.map((social) => (
          <a
            aria-label={`${social.title} link`}
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.href.includes("x") ? (
              <XIcon />
            ) : social.href.includes("github") ? (
                <Github size={24} />
            ) : social.href.includes("instagram") ? (
                  <Instagram size={24} />
            ) : null}
          </a>
        ))}
      </div>
    </div>
  );
}
