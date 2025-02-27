"use client";
import React, { useRef, useState, useCallback, useLayoutEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
    useScroll,
    useTransform,
    useSpring,
    motion,
} from "framer-motion";

const SmoothScroll = ({ children }) => {
    const scrollRef = useRef(null);
    const [pageHeight, setPageHeight] = useState(0);

    const resizePageHeight = useCallback((entries) => {
        for (let entry of entries) {
            setPageHeight(entry.contentRect.height);
        }
    }, []);

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver((entries) =>
            resizePageHeight(entries)
        );
        scrollRef && resizeObserver.observe(scrollRef.current);
        return () => resizeObserver.disconnect();
    }, [scrollRef, resizePageHeight]);

    const { scrollY } = useScroll();
    const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
    const physics = { damping: 15, mass: 0.27, stiffness: 55 };
    const spring = useSpring(transform, physics);

    // Scroll to the section smoothly when an anchor link is clicked
    const scrollToSection = (event) => {
        event.preventDefault(); // Prevent default anchor link behavior

        const targetId = event.currentTarget.getAttribute("href").substring(1); // Get the ID of the section
        const targetElement = document.getElementById(targetId); // Find the element with that ID

        if (targetElement) {
            // Smooth scroll to the target section
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    useLayoutEffect(() => {
        // When the hash changes, scroll to the target element smoothly
        const handleHashChange = () => {
            const targetId = window.location.hash.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        };

        // Listen to hashchange events
        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    useLayoutEffect(() => {
        // Listen for clicks on anchor links and handle the smooth scroll
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach((link) =>
            link.addEventListener("click", scrollToSection)
        );

        return () => {
            links.forEach((link) =>
                link.removeEventListener("click", scrollToSection)
            );
        };
    }, []);

    return (
        <>
            <motion.div
                ref={scrollRef}
                style={{ y: spring }}
                className="scroll-container"
            >
                {children}
            </motion.div>
            <div style={{ height: pageHeight }} />
        </>
    );
};

export default SmoothScroll;
