import React from 'react';

import { AwardRibbon } from '../../../assets/icons';
import './styles.scss';

const HowOneBurnerWorks = () => {
  return (
    <section className="how_one_burner_works">
      <div className="how_one_burner_helps">
        <h2 className="d_inline_block">How Oneburner help enterprises grow</h2>

        <div className="how_one_burner_helps__grid">
          <div className="_grid_briefing text_max_width">
            <p>
              Oneburner software solution helps your business by creating an
              enabling environment for easy communication and feedbacks in real
              time. Oneburner brings all your user and teams in a single place
              with 99.99% uptime SLA and Data security
            </p>
          </div>

          <div className="_grid_list_items text_max_width">
            <ul>
              <li>
                <span className="_main_text_size">
                  Data protection and control
                </span>
              </li>

              <li>
                <span className="_main_text_size">Reporting and analytics</span>
              </li>

              <li>
                <span className="_main_text_size">
                  Use single sign-on and multi-factor authentication to secure
                  accounts
                </span>
              </li>

              <li>
                <span className="_main_text_size">
                  Enterprise integration with other tools
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="one_burner_award">
        <div className="one_burner_award__grid">
          <div className="award_container">
            <AwardRibbon />
          </div>

          <div className="award_content">
            <span>Best Collaboration Software</span>
            <span>Africa tech coalition award 2020</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowOneBurnerWorks;
