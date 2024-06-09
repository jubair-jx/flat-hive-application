import PageSectionTitle from "@/components/shared/PageSectionTitle/PageSectionTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Amazing informative blog for you",
};
function BlogPage() {
  return <PageSectionTitle heading="Blog Is Coming soon..." />;
}

export default BlogPage;
