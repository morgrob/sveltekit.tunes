var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/morgrob/sveltekit.tunes', // Update to point to your repository  
        user: {
            name: 'Morgan Roberts', // update to use your name
            email: 'morgrob23@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)