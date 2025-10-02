        document.addEventListener('DOMContentLoaded', () => {
            const copyButton = document.querySelector('.copy-code-btn');
            if (copyButton) {
                // We needs to re-render the icon inside the button after the main script runs
                feather.replace({ width: '18px', height: '18px' });

                copyButton.addEventListener('click', () => {
                    const codeBlock = document.querySelector('.code-block-wrapper pre code');
                    const codeToCopy = codeBlock.innerText;

                    // Uses a temporary textarea for the most reliable copy command
                    const tempTextArea = document.createElement('textarea');
                    tempTextArea.value = codeToCopy;
                    document.body.appendChild(tempTextArea);
                    tempTextArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(tempTextArea);

                    // Provides visual feedback to the user
                    const originalIconHTML = copyButton.innerHTML;
                    copyButton.innerHTML = '<i data-feather="check"></i>';
                    feather.replace({ width: '18px', height: '18px' });

                    setTimeout(() => {
                        copyButton.innerHTML = originalIconHTML;
                        feather.replace({ width: '18px', height: '18px' });
                    }, 2000);
                });
            }
        });