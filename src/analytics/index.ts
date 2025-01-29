import mixpanel from "mixpanel-browser";
 
const MIXPANEL_PROJECT_TOKEN = "a976cfd50e5036d84aa43e3330b93bff";

const MixpanelInit = () => {
    mixpanel.init(MIXPANEL_PROJECT_TOKEN, {
        debug: true,
        track_pageview: false,
        persistence: "localStorage",
      });
};
type EventType = string | 'Page View' | 'Click';

const sendEvent = (event_name: EventType, properties?: any) => {
    mixpanel.track(event_name, properties)
};

export { MixpanelInit, sendEvent };
