import React from 'react';

type Props = {};

const Purchase = (props: Props) => {
    return <>
        <svg
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15.7592 0.504883C16.9388 0.712022 17.9732 1.14449 18.791 1.9132C19.3243 2.40219 19.713 2.99169 19.9249 3.6331C19.9872 3.82263 20.0924 3.91828 20.3331 3.96464C21.9037 4.26449 23.4701 4.5796 25.0378 4.89295C25.7927 5.04376 25.9158 5.21862 25.7422 5.86645C25.6578 6.1798 25.583 6.49549 25.4883 6.80532C25.4329 6.98664 25.4993 7.08875 25.7131 7.05882C26.5572 6.94146 26.9889 7.32522 27.3445 7.91026C27.7334 8.55046 28.199 9.15897 28.6536 9.76924C28.9414 10.1565 28.8376 10.5908 28.8701 10.9956C28.9801 12.367 29.0285 13.7413 29.1088 15.1144C29.22 17.0312 29.3353 18.9491 29.4547 20.8679C29.547 22.3666 29.6381 23.8657 29.728 25.3651C29.818 26.8251 29.9183 28.285 29.9965 29.7456C30.029 30.3623 29.8443 30.5049 29.1171 30.5049C19.7077 30.5049 10.2957 30.5049 0.881226 30.5049C0.154763 30.5049 -0.030658 30.3617 0.00393549 29.745C0.102873 27.9535 0.222566 26.1626 0.331882 24.3717C0.383772 23.5243 0.430819 22.6776 0.482017 21.8303C0.593639 20.0006 0.705722 18.1706 0.818266 16.3402C0.86808 15.5128 0.916742 14.6852 0.96425 13.8575C1.03574 12.631 1.10493 11.4042 1.17181 10.1771C1.18879 10.0311 1.24979 9.89122 1.34893 9.771C1.88305 9.01872 2.42409 8.26997 2.94438 7.51065C3.12842 7.24249 3.3595 7.07232 3.73173 7.06703C3.95243 7.06703 3.9891 6.98078 3.96281 6.80474C3.81198 5.79955 3.67915 4.79202 3.53593 3.78625C3.46674 3.29393 3.68952 3.06508 4.28107 3.0064C6.36913 2.7975 8.4565 2.58156 10.5446 2.37207C10.6129 2.37023 10.68 2.35567 10.7409 2.3294C10.8019 2.30314 10.8553 2.26582 10.8974 2.22009C11.7173 1.29706 12.8084 0.74723 14.143 0.535983C14.1764 0.52842 14.2089 0.518 14.2398 0.504883L15.7592 0.504883ZM14.9981 29.434H28.1187C28.2343 29.434 28.3491 29.431 28.4647 29.434C28.6598 29.4369 28.7165 29.363 28.7041 29.1993C28.6383 28.3531 28.583 27.5063 28.5311 26.659C28.413 24.7421 28.2977 22.8241 28.1852 20.9049C28.0952 19.415 28.0004 17.9257 27.9139 16.4358C27.812 14.6731 27.714 12.9102 27.6199 11.147C27.5978 10.7427 27.5694 10.7146 27.1024 10.7146H2.93193C2.42064 10.7146 2.39573 10.7363 2.37843 11.177C2.37151 11.4117 2.37151 11.6464 2.35698 11.8811C2.25044 13.5652 2.13628 15.2487 2.03388 16.9329C1.95155 18.2866 1.88651 19.6409 1.80695 20.9947C1.69809 22.8333 1.58624 24.6735 1.47139 26.5153C1.42088 27.3526 1.4022 28.1923 1.31088 29.0267C1.2576 29.505 1.37384 29.4375 1.77374 29.4375L14.9981 29.434ZM7.03886 9.62488C7.3848 9.62488 7.73073 9.60963 8.07667 9.62899C8.38939 9.64718 8.49179 9.57911 8.39285 9.3039C8.26693 8.95183 8.18529 8.58449 8.08289 8.2242C7.91477 7.61569 8.04899 7.42792 8.76093 7.28532C10.393 6.95261 12.0245 6.61696 13.6587 6.29246C13.9264 6.23906 14.0544 6.15691 14.0143 5.8999C13.8863 5.07838 13.7784 4.25686 13.6684 3.43535C13.6414 3.22703 13.5494 3.16601 13.2858 3.19417C11.4274 3.38958 9.56695 3.56796 7.70721 3.75104L5.2746 3.98518C5.01376 4.011 4.83318 4.04738 4.89891 4.36014C5.01791 4.92464 5.0615 5.50087 5.14176 6.07183C5.29674 7.17442 5.45933 8.27642 5.60739 9.38019C5.63229 9.5662 5.71878 9.63251 5.93464 9.62723C6.30202 9.61726 6.67079 9.6243 7.03886 9.62488ZM21.6975 9.62488C22.1348 9.62488 22.572 9.6108 23.0079 9.62958C23.304 9.64249 23.4334 9.55799 23.4991 9.30625C23.7685 8.26919 24.0531 7.23525 24.3529 6.20444C24.4304 5.9398 24.3425 5.85236 24.0422 5.79368C22.0261 5.40581 20.0142 5.00327 18.0002 4.60483C17.4958 4.50508 17.4958 4.50332 17.3775 4.93813C17.2142 5.54899 17.2142 5.54899 17.931 5.40757C18.5453 5.29021 18.7993 5.42635 18.9459 5.94977C19.2628 7.0776 19.5914 8.20307 19.8986 9.33266C19.9602 9.5574 20.0792 9.63603 20.3463 9.62606C20.8008 9.61373 21.2499 9.62488 21.6975 9.62488ZM14.2163 9.62488C15.5855 9.62488 16.9547 9.6196 18.3246 9.62899C18.6014 9.62899 18.6893 9.58087 18.6131 9.33207C18.3627 8.51056 18.1226 7.68904 17.9067 6.85813C17.8376 6.59877 17.7137 6.55417 17.4335 6.61403C16.3957 6.83584 15.3579 7.04532 14.3159 7.2595C12.7938 7.56992 11.2759 7.88327 9.74961 8.18488C9.47286 8.23887 9.38153 8.32806 9.47286 8.56806C9.56772 8.81888 9.64102 9.0752 9.69218 9.335C9.73923 9.5621 9.87068 9.6331 10.1377 9.6284C11.5 9.6196 12.8582 9.62488 14.2163 9.62488ZM12.9322 2.14029C13.2505 2.10743 13.5694 2.08161 13.8856 2.04053C14.4571 1.96953 14.7435 2.14029 14.8134 2.62029C14.9559 3.59672 15.0901 4.57432 15.2285 5.55427C15.2818 5.94156 15.4395 6.02899 15.7578 5.84122C15.8768 5.7708 15.8851 5.65989 15.9135 5.55779C16.0657 5.01735 16.2117 4.47515 16.3632 3.93471C16.5196 3.37549 16.7659 3.25168 17.4328 3.38723C17.785 3.45941 18.1392 3.52747 18.5177 3.60258C17.841 1.83046 14.931 0.896276 12.9322 2.14029ZM25.9089 9.62488C26.1857 9.62488 26.4624 9.61784 26.735 9.62488C26.9744 9.6331 27.0636 9.59496 26.9045 9.39016C26.7032 9.1308 26.4894 8.87144 26.3448 8.58743C26.1372 8.18078 25.7788 8.13442 25.3381 8.17139C25.2691 8.17081 25.2021 8.19129 25.1494 8.2291C25.0967 8.26691 25.0618 8.31952 25.051 8.37735C24.959 8.70831 24.869 9.03985 24.7742 9.3708C24.7244 9.54684 24.7957 9.62782 25.0143 9.6243C25.3118 9.62019 25.6107 9.62371 25.9089 9.62488ZM4.33089 9.44239C4.28246 9.08562 4.23679 8.72884 4.18421 8.37266C4.17452 8.30752 4.15308 8.22948 4.06175 8.2107C3.95036 8.1884 3.89708 8.26527 3.85004 8.331C3.58298 8.7042 3.32076 9.08092 3.053 9.45412C2.95753 9.58733 3.01772 9.62606 3.17546 9.62488C3.49649 9.62488 3.81683 9.62488 4.13786 9.62488C4.27969 9.62195 4.35095 9.56503 4.33089 9.44239Z"
                fill="currentColor"
            />
            <path
                d="M9.87352 15.8842C9.87352 15.6013 9.85692 15.3173 9.87837 15.0357C9.89636 14.7933 9.80226 14.6513 9.54627 14.5211C8.87723 14.1807 8.61363 13.6467 8.70496 12.9995C8.7866 12.4186 9.17474 12.0131 9.80365 11.7825C10.2116 11.6358 10.6687 11.6205 11.089 11.7394C11.5094 11.8582 11.8642 12.103 12.0868 12.4279C12.5469 13.091 12.3774 13.9929 11.6253 14.4172C11.2144 14.649 11.112 14.9048 11.141 15.2821C11.1888 15.8842 11.0822 16.4921 11.2102 17.0924C11.5762 18.8064 13.355 19.9219 15.4611 19.7606C17.3423 19.6162 18.8429 18.1844 18.8512 16.5203C18.8547 16.0221 18.8422 15.5227 18.8561 15.0269C18.863 14.801 18.7931 14.6578 18.5454 14.531C17.8535 14.179 17.572 13.6244 17.6923 12.9572C17.8051 12.3352 18.2534 11.9198 18.9654 11.7308C19.3884 11.6209 19.8442 11.6457 20.2472 11.8005C20.6503 11.9553 20.9729 12.2295 21.1545 12.5717C21.5281 13.263 21.2569 14.1085 20.4882 14.5011C20.1969 14.6501 20.1173 14.8145 20.116 15.0879C20.116 15.7891 20.181 16.4921 20.0606 17.1922C19.6988 19.3081 17.4218 20.9271 14.8993 20.8567C12.019 20.7757 9.87768 18.8968 9.87214 16.444C9.87283 16.255 9.87352 16.0696 9.87352 15.8842ZM10.4844 12.753C10.357 12.751 10.2333 12.7897 10.1379 12.8615C10.0426 12.9332 9.98252 13.0328 9.96969 13.1403C9.95862 13.2659 9.96554 13.3698 10.169 13.2706C10.2594 13.2272 10.3602 13.2018 10.464 13.1964C10.5677 13.191 10.6714 13.2058 10.7674 13.2395C10.8484 13.2635 10.9279 13.3668 11.0089 13.2982C11.0898 13.2295 11.0552 13.1122 11.0089 13.0235C10.9666 12.9371 10.893 12.8643 10.7987 12.8157C10.7044 12.7671 10.5944 12.7451 10.4844 12.753ZM18.9681 13.3252C19.2573 13.192 19.5286 13.145 19.8115 13.2606C19.8697 13.2841 19.9298 13.3439 19.9949 13.2946C20.0599 13.2454 20.0357 13.1667 20.0226 13.1016C19.9755 12.8669 19.7098 12.7225 19.3999 12.756C19.0899 12.7894 18.9564 12.9637 18.9681 13.3252Z"
                fill="currentColor"
            />
        </svg>
    </>;
};

export default Purchase;