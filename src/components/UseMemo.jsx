import React, { useEffect } from 'react';

const UseEffectExample = () => {
    useEffect(() => {
        function counter() {
            for (let i = 0; i < 1000; i++) {
                console.log(i);
            }
        }
        counter();
    }, []);

    return (
        <div>
            <p>Check the console for the counter logs.</p>
        </div>
    );
};

export default UseEffectExample;
