import SectionReveal from "./SectionReveal";

type SectionHeadingProps = {
  index: string;
  title: string;
  description: string;
};

const SectionHeading = ({ index, title, description }: SectionHeadingProps) => (
  <SectionReveal className="section-heading">
    <p className="section-index">{index}</p>
    <h2 className="section-title">{title}</h2>
    <p className="section-description">{description}</p>
  </SectionReveal>
);

export default SectionHeading;
