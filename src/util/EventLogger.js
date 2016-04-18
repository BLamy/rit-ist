/**
 * A Utility class for logging events
 * @param {JQuery Object} - Alternative output
 */
define(function() {
  let logger = $("#EventLog");
  let logs = [];

  /**
   * Will push the event to the event log
   * @param {String} - The message to be logged
   * @param {Event} - Optional event which triggered the log
   */
  return {
    log: function(message, event) {
      logs.push({
        message: message,
        event: event
      });

      if (logger.length) {
        logger.append('<li>' + message + '</li>');
      } else {
        console.log(message);
      }
    }
  };

});
