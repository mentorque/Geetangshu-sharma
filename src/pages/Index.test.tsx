import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Index from "./Index";

describe("editorial portfolio template", () => {
  it("renders every core portfolio section", () => {
    render(<Index />);

    expect(
      screen.getByRole("heading", { name: /geetanshu sharma/i })
    ).toBeInTheDocument();

    for (const section of [
      "Experience",
      "Projects",
      "Skills",
      "Education",
      "Contact",
    ]) {
      expect(
        screen.getByRole("heading", { name: new RegExp(section, "i") })
      ).toBeInTheDocument();
    }
  });
});
