import Typewriter from 'typewriter-effect';

export const TypewriterText = ({text}) => {

    return (
        <>
            <Typewriter
                options={{
                    strings: text,
                    autoStart: true,
                    loop: false,
                    delay: 20,
                }}
            />
        </>
    )
}

