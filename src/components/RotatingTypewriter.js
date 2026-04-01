import React, { useEffect, useState } from "react";

const RotatingTypewriter = ({
    texts = [],
    typingSpeed = 80,
    deletingSpeed = 45,
    pauseTime = 1000,
    className = "",
    showCursor = true,
    cursorClassName = "animate-pulse",
}) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typedText, setTypedText] = useState("");

    useEffect(() => {
        if (!texts.length) {
            setTypedText("");
            return;
        }

        const activeText = texts[currentTextIndex] ?? texts[0];
        let actionTimer;

        if (!isDeleting) {
            if (typedText.length < activeText.length) {
                actionTimer = setTimeout(() => {
                    setTypedText(activeText.slice(0, typedText.length + 1));
                }, typingSpeed);
            } else {
                actionTimer = setTimeout(() => {
                    setIsDeleting(true);
                }, pauseTime);
            }
        } else if (typedText.length > 0) {
            actionTimer = setTimeout(() => {
                setTypedText(activeText.slice(0, typedText.length - 1));
            }, deletingSpeed);
        } else {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }

        return () => {
            clearTimeout(actionTimer);
        };
    }, [currentTextIndex, isDeleting, typedText, texts, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <span className={className}>
            <span>{typedText || "\u00A0"}</span>
            {showCursor ? <span className={cursorClassName}>|</span> : null}
        </span>
    );
};

export default RotatingTypewriter;