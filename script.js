const textarea = document.getElementById('myTextarea');
const characterCount = document.getElementById('characterCount');
const maxCharacter = 140;

function updateCharacterCount() {
    const currentLength = textarea.value.length;
    const remaniningLength = maxCharacter - currentLength;
    characterCount.textContent = `Characters written: ${currentLength} character remaining ${remaniningLength}`;
}

textarea.addEventListener('input', updateCharacterCount);