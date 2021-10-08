import React, { useEffect } from "react";
import { gsap } from "gsap";

const tl = gsap.timeline({ default: { ease: "SlowMo.easeOut" } });
const Loading = () => {
  useEffect(() => {
    tl.to(".handwrting", 1.5, {
      duration: 1,
      y: "-100%",
      delay: 4,
    });
  });
  return (
    <div className="handwrting">
      <div className="handwrting__container">
        <svg viewBox="0 0 340 333" className="logo">
          <path
            className="path"
            fill="none"
            stroke="black"
            d="M27.5499 168.448C24.5259 182.704 25.2459 195.376 28.5579 205.744C38.4939 236.56 72.6219 245.776 99.6939 225.472C112.942 215.824 119.854 201.424 126.19 184.432C149.95 121.504 147.502 30.208 158.014 17.536C169.822 18.544 177.598 19.264 189.55 18.544C201.79 17.824 202.222 11.632 200.494 3.568C198.91 6.01599 194.878 7.45599 189.262 8.03199C161.182 11.056 132.67 3.42399 104.014 3.42399C97.5339 3.42399 90.9099 3.71199 84.4299 4.71999C75.6459 6.15999 66.8619 8.60799 58.2219 12.64C19.1979 30.928 -5.71406 70.672 9.98194 111.856C26.6859 155.92 91.7739 139.36 76.7979 80.464C74.2059 70.528 69.4539 60.88 63.4059 53.104L60.8139 53.968C65.8539 60.592 71.6139 71.392 74.4939 83.056C86.3019 131.296 35.3259 153.184 18.3339 108.544C8.68594 83.488 11.7099 45.76 40.9419 27.328C68.8779 9.75999 99.4059 10.912 130.222 14.368C133.246 14.656 148.222 16.528 151.39 16.96C129.07 45.76 143.902 180.4 93.0699 223.312C78.8139 233.392 57.0699 235.408 43.8219 225.184C37.7739 220.432 33.1659 213.664 30.2859 205.024C27.1179 195.088 26.5419 182.848 29.4219 168.88L27.5499 168.448ZM225.373 124.096L223.933 126.688C221.341 131.584 215.869 140.224 215.725 140.512C213.997 142.672 210.685 146.416 209.389 144.112C207.661 141.088 210.253 130.288 211.117 126.976C212.701 121.792 214.285 117.04 213.853 115.024C212.845 111.28 204.061 109.12 195.421 112.144C186.205 115.456 180.589 123.088 178.861 132.448C177.709 138.496 178.573 148.864 186.925 148.144C194.557 147.568 199.597 137.056 202.189 133.312C202.045 135.472 202.045 137.632 202.333 139.648C202.621 142.096 203.485 145.12 205.357 146.704C206.797 148.144 209.101 148.144 210.109 147.856C213.133 146.992 216.301 143.104 217.885 140.944C219.613 138.64 223.213 132.16 226.237 126.688L227.677 124.096H225.517H225.373ZM191.821 142.816C184.765 148.72 184.765 138.784 186.205 134.176C188.077 127.552 191.821 122.224 198.013 118.912C201.469 117.04 205.213 116.608 205.789 117.904C204.637 120.928 203.485 125.536 203.053 126.4C201.037 130.864 195.565 139.792 191.821 142.816ZM271.274 124.096L269.834 126.688C267.242 131.584 263.93 137.056 262.202 139.792C259.034 144.4 256.442 145.408 256.154 145.408C254.426 145.12 254.57 141.088 255.146 136.912C255.578 133.024 256.586 129.28 257.162 125.392C257.45 122.656 257.738 120.208 257.45 118.336C256.874 114.736 255.002 112.576 250.826 113.584C249.098 114.16 239.162 133.168 237.146 136.768C237.722 134.464 238.01 131.872 238.442 129.424C238.73 126.976 239.306 124.672 239.45 122.224C239.738 120.496 239.882 118.624 239.594 116.896C239.594 116.464 239.45 116.032 239.45 115.6C239.162 114.448 238.442 112.72 237.434 111.712C235.85 110.272 234.122 110.704 232.682 112C231.242 113.44 229.946 115.744 229.082 117.328C227.642 119.92 226.202 122.656 225.338 124.096L223.898 126.688H226.202L227.642 124.096C229.226 121.216 230.522 118.912 230.954 118.048C231.098 117.904 231.098 117.904 231.242 117.76C232.25 116.32 232.394 117.328 232.25 118.48C232.106 120.208 230.378 131.44 230.234 132.16C229.658 136.48 229.082 140.656 229.082 142.816C229.226 146.992 232.106 149.008 233.978 147.568C234.842 146.992 239.162 138.496 240.17 136.48C242.762 131.152 245.642 125.968 247.802 122.224C249.53 119.776 249.386 123.088 248.954 126.544C248.666 128.992 248.234 131.44 248.09 133.888C247.658 138.496 248.09 147.712 254.282 148C258.17 147.856 261.05 144.688 263.786 140.944C265.514 138.64 269.114 132.304 272.138 126.688L273.578 133.545z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loading;
