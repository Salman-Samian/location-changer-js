const LocationChangerJs = {};


LocationChangerJs.getCurrentURLPath = async (href) => {
     try {
          var strlUrl = href.split('/');
          var strlUrlE = "/";
          for (var i = 3; i < strlUrl.length; i++) {
               if (strlUrl.length == (i + 1)) {
                    strlUrlE += (strlUrl[i].split('#')[0]);
               } else {
                    strlUrlE += strlUrl[i] + "/";
               }
          }

          return strlUrlE;
     } catch (err) {
          return err;
     }
};

module.exports = LocationChangerJs;
