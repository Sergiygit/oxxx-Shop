export const tourItemCollectionQuery = `
  {
    tourItemCollection {
      items {
        date
        place 
        city 
        soldOut
        country
        ticketLink
        videoLink
        sys {
          id
        }
      }
    }
  }
`;

export const trakItemCollectionQuery = `
  {
    trackCollection {
      items {
        sys {
          id
        }
		  date
		  title
		  description
		  link {
			url
		  }
		  cover {
			url
		  }
      }
    }
  }
`;

export const newsItemCollectionQuery = `
  {
   newsItemCollection {
      items {
        sys {
          id
        }
		  title
		  date
		  cover {
			url
		  }
      }
    }
  }
`;

// export const newsItemQuery = (id) => `
// {
//   newsItem(id: "${id}") {
//     sys {
//       id
//     }
//     title
//     date
   //  cover {
   //    url
   //  }
//     description {
//       json
//     }
//   }
// }
// `;

export const newsItemQuery = (id) => `
{
  newsItem(id: "${id}") {
    sys {
      id
    }
	 title
	 date
	 cover {
      url
    }
	 description {
		json
	 }
  }
}
`;
