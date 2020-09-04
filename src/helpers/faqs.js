const faqs = [
    {
        question: `Can I keep a track of my calories across multiple devices?`,
        answer: `Currently, we do not offer support for this. This app uses your browsers local storage to keep a track of your calories and other settings.

        In the future, we hope to add functionality that will allow you to log in and track your beers from anywhere.`
    },
    {
        question: `How do you calculate the calories?`,
        answer: `We use a formula to calculate calories based on the beers percentage (ABV) and it's volume.
        
        After some research and comparison, we believe that our formula is fairly accurate. However, please always take these values with a pinch of salt. Every beer is different and so we can't account for additional or unusual ingredients. If you're interested, our formula is as follows:
        
        ((Percentage * 2.64) / 29.5735) * volume`
    },
    {
        question: `Can I use this for drinks other than beer?`,
        answer: `We don't recommend it.
        
        Technically, you can as long as you know the percentage of the drink and it matches one of the volumes that can be selected. However, our formula is designed purely off of the information derived from the beer world. It's almost certain that measuring other alcoholic drinks via this device will not be accurate.`
    },
    {
        question: `I made a mistake, can I reset my calories for the day?`,
        answer: `Of course! Simply click the trash can icon next to the calorie counter and it'll be reset to zero.
        
        Equally, once you've submitted a beer, you will be given a chance to undo that beer on the final screen. Please bare in mind that this only works for undoing that one beer, not any that came before it.`
    },
    {
        question: `What's that cog in the top left corner?`,
        answer: `This is your device settings area. Click the cog and a small window will pop open where you can set a couple of options.

        The first option allows you to switch the app between light and dark mode. Set this however you prefer.
        
        Toggling the second switch to the on position will engage a threshold warning system across the app. You can enter an upper limit of calories that you are aiming to stay under and then receive warnings when you get close to that number for the day. When you're less than 20% below your target, the calorie counter text will turn a pale red color. If you go over, it will turn a stronger red color.
        
        This is us gently warning you that you've surpassed your own target. This won't stop the app from functioning though so don't fear if you decide to go over.`
    },
    {
        question: `You said this is an app. How can I save it to my devices home screen?`,
        answer: `Unlike normal apps, this one cannot be downloaded from your local app store. This allows us to provide beer compare as both a website and app experience. As such, you can save this app directly to your devices home screen and use it like any other app. You'll never know the difference!
        
        You can simply tap the install button at the bottom of the page and you're all set. We recommend using beer compare in this way because it'll keep all of your data in one place and make the experience much more enjoyable.`
    }
]

export { faqs }
