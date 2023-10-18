//if (!Scratch.extensions.unsandboxed) {
    //throw new Error("ScratchAuthBeta must be run unsandboxed");
//}

class AuthScratch {
  getInfo() {
    return {
      id: 'scratchauthbetaplugin',
      name: 'Scratch Authorize Beta',
      blocks: [
        {
          opcode: 'getusernameauth',
          blockType: Scratch.BlockType.COMMAND,
          text: 'login with prompt [NAME]',
          arguments: {
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Project'
             }
           }
         }
       ]
     };
}

   getusernameauth(args) {
      try {
       let redirectUrl
       let conLink
       let openAuthPage
       let privateCode
       try {
         redirectUrl = 'https://studio.penguinmod.com/scratchAuthExt.html?openLocation=https://studio.penguinmod.com';
         conLink = btoa(redirectUrl);
         openAuthPage = 'https://auth.itinerary.eu.org/auth/?redirect=${redirectUrl}&name=' + args.NAME;
       } catch (error) {
         return error;
       }
       alert(args.NAME);
       alert(conLink);
       window.open(openAuthPage);
       //window.open('https://www.google.com');
    } catch (err) {
       return '';
    }
   }
 }
 Scratch.extensions.register(new AuthScratch());
