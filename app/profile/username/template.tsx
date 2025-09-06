import { TemplateWrapper } from "@/wrappers/TemplateWrapper";

export default function UserTemplate({ children }: { children: React.ReactNode }) {
  return <TemplateWrapper>{children}</TemplateWrapper>;
}
