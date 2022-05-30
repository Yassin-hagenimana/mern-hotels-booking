export const userColumns = [
  { field: "_id", headerName: "ID", width: 260 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },

  {
    field: "phone",
    headerName: "Phone",
    width: 120,
  },
];

export const hotelColumns=[
  {field:"_id",headerName:"ID",width:250},

  {
    field:"name",
    headerName:"Name",
    width:200
  },
  {
    field:"type",
    headerName:"Type",
    witdh:100
  },
  {
    field:"title",
    headerName:"Title",
    width:200
  },
  {
    field:"city",
    headerName:"City",
    width:100
  },
];

export const roomColumns=[
  {field:"_id",headerName:"ID",width:70},

  {
    field:"title",
    headerName:"Title",
    width:230
  },
  {
    field:"description",
    headerName:"Description",
    width:200
  },
  {
    field:"price",
    headerName:"Price",
    width:100
  },
  {
    field:"maxPeople",
    headerName:"Max People",
    width:100
  },
]