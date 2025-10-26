import { getPayload } from "payload";
import config from "../../../../payload.config";
import { RootPage } from "@payloadcms/next/views";

type Args = {
  params: Promise<{
    segments: string[];
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const Page = async ({ params, searchParams }: Args) => {
  return (
    <RootPage
      importMap={{}}
      config={config}
      params={params}
      searchParams={searchParams}
    />
  );
};

export default Page;
