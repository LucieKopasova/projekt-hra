import Typewriter from 'typewriter-effect';


const vzorovyText = 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores ullam sunt voluptates facilis incidunt nobis, explicabo, aut odio blanditiis dignissimos laudantium omnis, voluptatum expedita!';


export const TypewriterText = () => {

    return (
        <>
            <Typewriter
                options={{
                    strings: vzorovyText,
                    autoStart: true,
                    loop: false,
                    delay: 20,
                }}
            />
        </>
    )
}

