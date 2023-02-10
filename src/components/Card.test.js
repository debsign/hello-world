import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('<Card />', () => {
    it("render without errors", () => {
        render(<Card />);
    })

    it("render the title", () => {
        render(<Card title="Carlos"/>);
        expect(screen.getByText("Carlos")).toBeInTheDocument();
    })
})