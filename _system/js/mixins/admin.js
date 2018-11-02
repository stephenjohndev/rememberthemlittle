var adminMixin = {

  methods: {
    getAllBookings() {

      var formData = new FormData();
      formData.append('account_id', this.account.account_id);
      formData.append('token', this.account.token);
      Vue.http.post('/_system/php/api/booking/getAll.php', formData)
        .then(
          response => {

            if (response.body.success)
              this.bookings = response.body.data;
            else
              console.error(response.body.message);
          },
          response => {
            console.log('fail');
          });
    },
    approveBooking(booking_id) {
      var formData = new FormData();
      formData.append('account_id', this.account.account_id);
      formData.append('token', this.account.token);
      formData.append('booking_id', booking_id);
      Vue.http.post('/_system/php/api/booking/approveBooking.php', formData)
        .then(
          response => {

            if (response.body.success)
              this.getAllBookings();
            else
              console.error(response.body.message);
          },
          response => {
            console.log('fail');
          });

    }
  }

}