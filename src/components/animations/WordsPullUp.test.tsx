import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import WordsPullUp from './WordsPullUp';

describe('WordsPullUp', () => {
  it('splits text into individual words', () => {
    const { container } = render(<WordsPullUp text="Hello World Test" />);
    
    // Check that the text content is present
    expect(container.textContent).toBe('Hello World Test');
    
    // Check that words are wrapped in motion spans
    const spans = container.querySelectorAll('span');
    expect(spans.length).toBeGreaterThan(0);
  });

  it('renders text without asterisk by default', () => {
    const { container } = render(<WordsPullUp text="Prisma" />);
    
    // Should not contain asterisk when showAsterisk is false
    expect(container.textContent).toBe('Prisma');
    expect(container.textContent).not.toContain('*');
  });

  it('renders asterisk when showAsterisk is true', () => {
    const { container } = render(
      <WordsPullUp text="Prisma" showAsterisk={true} />
    );
    
    // Should contain asterisk after the final "a"
    expect(container.textContent).toContain('*');
    expect(container.textContent).toContain('Prisma');
  });

  it('applies custom className to container', () => {
    const { container } = render(
      <WordsPullUp text="Test" className="custom-class text-4xl" />
    );
    
    const divElement = container.firstChild as HTMLElement;
    expect(divElement.className).toContain('custom-class');
    expect(divElement.className).toContain('text-4xl');
  });

  it('handles single word text', () => {
    const { container } = render(<WordsPullUp text="Single" />);
    
    expect(container.textContent).toBe('Single');
  });

  it('handles empty text gracefully', () => {
    const { container } = render(<WordsPullUp text="" />);
    
    // Should render without errors
    expect(container).toBeTruthy();
  });

  it('preserves spaces between words', () => {
    const { container } = render(<WordsPullUp text="One Two Three" />);
    
    // Text content should maintain word separation
    expect(container.textContent).toBe('One Two Three');
  });

  it('adds asterisk only to last word when multiple words present', () => {
    const { container } = render(
      <WordsPullUp text="Hello Prisma" showAsterisk={true} />
    );
    
    // Should contain asterisk and both words
    expect(container.textContent).toContain('*');
    expect(container.textContent).toContain('Hello');
    expect(container.textContent).toContain('Prisma');
  });
});
