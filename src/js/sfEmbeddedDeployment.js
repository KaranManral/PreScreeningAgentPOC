export function initEmbeddedMessaging() {
  window.addEventListener("onEmbeddedMessagingReady", () => {
    console.log("Received the onEmbeddedMessagingReady event…");

    // Send data to Salesforce
    embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields({
      JobApplicationNumber: "JAR-0002"
    });

    // // Remove any items from the previous list that you don't want to send
    // embeddedservice_bootstrap.prechatAPI.removeHiddenPrechatFields(["Customer_ID"]);
  });
  try {
    embeddedservice_bootstrap.settings.language = "en_US"; // For example, enter 'en' or 'en-US'

    embeddedservice_bootstrap.init(
      "00DgL0000071swn",
      "Karan_Manral",
      "https://orgfarm-bc9c32a6ca-dev-ed.develop.my.site.com/ESWKaranManral1753872031937",
      {
        scrt2URL:
          "https://orgfarm-bc9c32a6ca-dev-ed.develop.my.salesforce-scrt.com",
      }
    );
  } catch (err) {
    console.error("Error loading Embedded Messaging: ", err);
  }
}
