"use client";

import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div
          className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-lg backdrop:blur-2xl hover:border-blue-400 hover:bg-white/25 
      hover:shadow-2xs
      cursor-pointer transform"
        >
          <p className="text-sm font-semibold text-gray-950 flex items-center space-x-1 transition-transform">
            <span>Doqu</span>
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Let&apos;s chat with<span className="text-blue-600"> documents</span>
        </h1>
        <p className="text-gray-400">
          View, edit with your documents with the help of{" "}
          <span className="text-black">AI </span>with your own pace.
        </p>
        <Button
          className="mt-10 transition transform group hover:text-blue-500 hover:bg-zinc-100 hover:shadow-md cursor-pointer"
          variant={"outline"}
          onClick={() => router.push("/dashboard")}
        >
          Get Started
          <ArrowRightIcon className="h-4 w-4 group-hover:text-blue-700 transform transition-transform group-hover:translate-x-1" />
        </Button>
      </MaxWidthWrapper>

      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
          </div>
        </div>

        <div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-mt-2 rounded-xl bg-gray-900/10 p-2 ring ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-xl hover:shadow-2xl ring-1 transition-all ring-gray-900/10 hover:ring-blue-400  duration-300 bg-gradient-to-b"
                  src="/dashboard-preview.jpg"
                  alt="dashboard_preview"
                  width={1364}
                  height={866}
                  quality={100}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="mt-2 font-bold text-4xl text-gray-800 sm:text-5xl">
                Start chatting
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Talk to your PDF like never before
              </p>
            </div>
          </div>
        </div>

        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-200 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-400">Step 1</span>
              <span className="text-xl font-semibold">Create an account</span>
              <span className="mt-2 text-zinc-900">
                Get started with a free or{" "}
                <Link
                  href="/pricing"
                  className="text-blue-500 underline underline-offset-2"
                >
                  pro plans
                </Link>
              </span>
            </div>
          </li>

          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-200 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-400">Step 2</span>
              <span className="text-xl font-semibold">Upload PDF document</span>
              <span className="mt-2 text-zinc-900">
                Upload your PDF and chat with your documents. We value your
                privacy
              </span>
            </div>
          </li>

          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-200 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-400">Step 3</span>
              <span className="text-xl font-semibold">
                Ask relevant questions
              </span>
              <span className="mt-2 text-zinc-900">
                Within minutes get all the information
              </span>
            </div>
          </li>
        </ol>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/file-upload-preview.jpg"
                alt="uploading preview"
                width={1419}
                height={732}
                quality={100}
                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
