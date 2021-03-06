import types from "./types";

export const navigationChanged = newPath => {
    return {
        type: types.NAVIGATION_CHANGED,
        payload: newPath
    };
};

export const storyChanged = newStory => {
    return {
        type: types.STORY_CHANGED,
        payload: newStory
    }
}

export const letterTyped = (newText, textAreaNum) => {
    return {
        type: types.ON_KEY_DOWN,
        payload: { newText, textAreaNum }
    }
}

export const titleChanged = (newTitle, textAreaNum) => {
    return {
        type: types.CHANGE_TITLE,
        payload: { newTitle, textAreaNum }
    }
}

