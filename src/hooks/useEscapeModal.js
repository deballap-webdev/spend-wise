import { useEffect } from "react";
const useEscapeModal = (isModalOpen, setIsModalOpen) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setIsModalOpen(false);
        };
        if (isModalOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isModalOpen, setIsModalOpen]);
}

export default useEscapeModal
