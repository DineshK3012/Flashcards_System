import {useState} from "react";
import {motion} from "framer-motion";

export default function Flashcard({topic, question, answer}) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip() {
        if (!isAnimating) {
            setIsAnimating(true);
            setIsFlipped(!isFlipped);
        }
    }

    return (
        <>
            <div className="flip-card min-w-full flex items-center justify-center my-5 cursor-pointer select-none" onClick={handleFlip}>
                <motion.div
                    className={`flip-card-inner w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg min-h-[12rem] sm:min-h-[14rem] md:min-h-[16rem] lg:min-h-[18rem] text-center relative preserve-3d`}
                    initial={false}
                    animate={{rotateY: isFlipped ? 180 : 0}}
                    transition={{duration: 0.6}}
                    onAnimationComplete={() => setIsAnimating(false)}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/*flashcard front */}
                    <div
                        className={`flip-card-front absolute w-full h-full backface-hidden bg-white shadow-xl rounded-lg flex flex-col justify-center items-center p-4 overflow-hidden`}
                        style={{minHeight: 'inherit'}}
                    >
                        <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 font-bold mb-4">{topic}</p>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 font-semibold break-words">
                            {question}
                        </p>

                        <span className={`absolute bottom-4 italic text-sm text-gray-600`}>Click To Flip</span>
                    </div>

                    {/*flashcard back*/}
                    <div
                        className={`flip-card-back absolute w-full h-full backface-hidden bg-blue-500 text-white shadow-xl rounded-lg flex justify-center items-center p-4 overflow-hidden`}
                        style={{transform: "rotateY(180deg)", minHeight: 'inherit'}}
                    >
                        <p className="text-sm sm:text-base md:text-lg font-semibold break-words">
                            {answer}
                        </p>

                        <span className={`absolute bottom-4 italic text-sm text-gray-200`}>Click To Flip</span>
                    </div>
                </motion.div>
            </div>
        </>
    )
}
