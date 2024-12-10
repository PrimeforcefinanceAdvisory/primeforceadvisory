import React from 'react';
import ServicesBox from './ServicesBox';

const Services = () => {
  return (
    <div id="services">
      <h1>Services</h1>
      <div className="services-container">
        <ServicesBox
          title="Index F&O"
          exampleMessage="(NIFTY OPTIONS) BUY NIFTY 24500 Call ABOVE 130 TGT 150,170,190 SL 105 (0-1 DAY)"
          description={[
            "We will provide 1-2 Nifty/Bank Nifty Option recommendations every day.",
            "We will provide 18-22 Nifty/Bank Nifty Option recommendations in a month.",
            "Recommendations are given via SMS/WhatsApp.",
            "Timely Entry and Exit."
          ]}
          buttonText="Subscribe to 3999/-"
        />
        <ServicesBox
          title="Equity/Stock Cash"
          exampleMessage="(CALL) BUY ADANIENT ABOVE 2780 TGT 2805,2830,2860 SL 2750 (NSE CASH)"
          description={[
            "We will provide 1-2 Cash recommendations every day.",
            "We will provide 20-22 Cash recommendations in a month.",
            "Recommendations are given via SMS/WhatsApp.",
            "Timely Entry and Exit."
          ]}
          buttonText="Subscribe to 3999/-"
        />
        <ServicesBox
          title="Equity Derivative"
          exampleMessage="(F&O) BUY ADANIENT FUT ABOVE 2800 TGT 2825,2855,2890 SL 2765 (NSE )"
          description={[
            "We will provide 1-2 Option recommendations every day.",
            "We will provide 20-22 Option recommendations in a month.",
            "Recommendations are given via Web Login/App.",
            "Timely Entry and Exit."
          ]}
          buttonText="Subscribe to 4999/-"
        />
        <ServicesBox
          title="Prime Force Advisory Special"
          description={[
            "We will provide 1-2 Nifty/Bank Nifty Option recommendations every day.",
            "We will provide 20-22 Nifty/Bank Nifty Option recommendations in a month.",
            "Recommendations are given via SMS/WhatsApp.",
            "Customized Services.",
            "RM Support with Researcher.",
            "Risk Management Support by RM."
          ]}
          buttonText="Subscribe to 10000/-"
        />
      </div>
    </div>
  );
};

export default Services;
