# Markdown editor realitme app
Made with React and Bootstrap
https://markdownreact.herokuapp.com/

1 - Loads the text from SampleText.js into the state
2 - The text is set as value for the text area at the left and transformed with "marked" to get the result at the right
3 - Each time the left text area is modified, the text in the state is also updated
4 - componentDidUpdate() - Each time the component is updated, the localStorage.text gets the actual value of state.text

