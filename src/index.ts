import { enroll } from '@openziti/ziti-sdk-nodejs';

const zitiEnrollTokenFile: string = process.env.ZITI_ENROLL_TOKEN_FILE ?? ''; // Assign the value of the environment variable or default to an empty string
// const zitiIdentityFiles: string = process.env.ZITI_IDENTITIES ?? ''; // semi-colon-separated list of identity files or default to an empty string
// const zitiIdentityFile: string = zitiIdentityFiles.split(";")[0]; // get the first identity file

if (!zitiEnrollTokenFile) {
    console.error("Error: ZITI_ENROLL_TOKEN_FILE environment variable is not set.");
    process.exit(0);
}

async function main() {
    try {
        const result = await enroll(zitiEnrollTokenFile);
        console.log('Enrollment successful:', result);
    } catch (error) {
        console.error('Enrollment failed:', error);
    }
}

main();
