import { constituents } from "../interfaces/constituents";
import { measurements } from "../interfaces/measurements";
import { tags } from "../interfaces/tags";


export interface Art {

    "objectID": number,
    "isHighlight": false,
    "accessionNumber": string,
    "accessionYear": string,
    "isPublicDomain": true,
    "primaryImage": string,
    "primaryImageSmall": string,
    "additionalImages": [string],
    "constituents": constituents,
    "department": string,
    "objectName": string,
    "title": string,
    "culture": string,
    "period": string,
    "dynasty": string,
    "reign": string,
    "portfolio": string,
    "artistRole": string,
    "artistPrefix": string,
    "artistDisplayName": string,
    "artistDisplayBio": string,
    "artistSuffix": string,
    "artistAlphaSort": string,
    "artistNationality": string,
    "artistBeginDate": string,
    "artistEndDate": string,
    "artistGender": string,
    "artistWikidata_URL": string,
    "artistULAN_URL": string,
    "objectDate": string,
    "objectBeginDate": number,
    "objectEndDate": number,
    "medium": string,
    "dimensions": string,
    "measurements": measurements,
    "creditLine": string,
    "geographyType": string,
    "city": string,
    "state": string,
    "county": string,
    "country": string,
    "region": string,
    "subregion": string,
    "locale": string,
    "locus": string,
    "excavation": string,
    "river": string,
    "classification": string,
    "rightsAndReproduction": string,
    "linkResource": string,
    "metadataDate": string,
    "repository": string,
    "objectURL": string,
    "tags": tags,
    "objectWikidata_URL": string,
    "isTimelineWork": false,
    "GalleryNumber": string

}





