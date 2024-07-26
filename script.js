// Initiate the script below on page window is succesffuly loaded
window.addEventListener("load", () => {
    (function() {

        // Initiating the count on text field input state
        document.getElementById('text-field').addEventListener("input", function(e) {
            // Text Field Value
            var text = document.getElementById('text-field').value
                // Count Variables
            var total_chars = 0;
            var total_chars_ns = 0;
            var total_words = 0;
            var total_paragraphs = 0;

            // Removing the spaces for counting the characters without the spaces
            var chars = text.replace(/\s/gi, '')

            //Splitting the words using the spaces as the delimiter
            var words = (text.trim()).split(/\s/gi)

            //Splitting the words using the next line as the delimiter
            var paragraphs = (text.trim()).split(/[\n\r]+/gi)

            // removing the empty strings in the word array
            Object.keys(words).map(k => {
                if (words[k].trim() == "") {
                    delete words[k];
                }
            })
            words = words.filter((v) => {
                return v.length > 0;
            })

            // Setting the count values
            total_chars = text.length
            total_chars_ns = chars.length
            total_words = words.length
            total_paragraphs = paragraphs.length

            // Updating the count containers text content
            document.getElementById('total-characters').innerText = parseFloat(total_chars).toLocaleString('en-US')
            document.getElementById('total-characters-ns').innerText = parseFloat(total_chars_ns).toLocaleString('en-US')
            document.getElementById('total-words').innerText = parseFloat(total_words).toLocaleString('en-US')
            document.getElementById('total-paragraphs').innerText = parseFloat(total_paragraphs).toLocaleString('en-US')
        })
    })();
})