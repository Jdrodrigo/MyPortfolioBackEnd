import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Contact from "../pages/Contact.jsx";

// Helper to render Contact with router (because it uses useNavigate)
const renderWithRouter = () => {
  return render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>
  );
};

describe("Contact page", () => {
  test("renders heading and intro text", () => {
    renderWithRouter();

    // Check main title
    expect(screen.getByText(/get in touch/i)).toBeInTheDocument();

    // Check intro paragraph
    expect(
      screen.getByText(/reach out for collaborations/i)
    ).toBeInTheDocument();
  });

  test("renders all contact form fields", () => {
    renderWithRouter();

    // Check labels and inputs exist
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();

    // Check the button
    expect(
      screen.getByRole("button", { name: /send/i })
    ).toBeInTheDocument();
  });
});
