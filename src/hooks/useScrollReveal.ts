import { useEffect, useRef } from 'react';

/**
 * Hook that triggers a CSS class when an element enters the viewport.
 * Uses IntersectionObserver for performance.
 */
export function useScrollReveal<T extends HTMLElement>(
    options: IntersectionObserverInit = {}
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('in-view');
                    observer.unobserve(el); // Only trigger once
                }
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -60px 0px',
                ...options,
            }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return ref;
}

/**
 * Hook that returns whether an element is in the viewport.
 * Useful for counter animations.
 */
export function useInView<T extends HTMLElement>(threshold = 0.3) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.dispatchEvent(new CustomEvent('inview'));
                    observer.unobserve(el);
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return ref;
}
