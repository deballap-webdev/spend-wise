import { useEffect } from "react";
const useEscapeModal = (isModalOpen, setIsModalOpen, disabled) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setIsModalOpen(false);
        };
        if (isModalOpen && !disabled) {
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isModalOpen, setIsModalOpen, disabled]);
}

export default useEscapeModal
