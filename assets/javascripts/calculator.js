var Calculator = function() {
  var timeAsString = function(time) {
    return twoDigits(time.getHours()) + ":" + twoDigits(time.getMinutes());
  };

  var twoDigits = function(string) {
    var collection = ("00" + string).split("");
    return collection[collection.length - 2] + collection[collection.length - 1];
  }

  var convertTime = function(arrivedAt, period) {
    var collection = arrivedAt.split(/[^A-Z0-9]/);
    var hours = collection[0];
    var minutes = collection[1];

    var dateTime = new Date(2011, 01, 01, hours, minutes);
    var result = new Date(dateTime.getTime() + period); 
    return timeAsString(result);
  };

  return {
    minTime: function(arrivedAt) {
      return convertTime(arrivedAt, ((9 * 60 + 33) * 60 * 1000));
    },

    regularTime: function(arrivedAt) {
      return convertTime(arrivedAt, ((9 * 60 + 48) * 60 * 1000));
    },

    maxTime: function(arrivedAt) {
      return convertTime(arrivedAt, ((9 * 60 + 63) * 60 * 1000));
    }
  };
}

