export default {
  "__schema": {
    "types": [
      {
        "kind": "OBJECT",
        "name": "Query",
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "ID",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ExternalLinks",
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "DateTime",
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "String",
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "Int",
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "JSON",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ExternalLinksConnection",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ExternalLinksGroupBy",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ExternalLinksConnectionId",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ExternalLinksConnectionCreated_at",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ExternalLinksConnectionUpdated_at",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ExternalLinksConnectionName",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ExternalLinksConnectionURL",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ExternalLinksAggregator",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Home",
        "possibleTypes": null
      },
      {
        "kind": "UNION",
        "name": "HomeBlocksDynamicZone",
        "possibleTypes": [
          {
            "name": "ComponentAtomsRichText"
          },
          {
            "name": "ComponentAtomsLearnMoreButton"
          },
          {
            "name": "ComponentAtomsImage"
          },
          {
            "name": "ComponentAtomsDocument"
          },
          {
            "name": "ComponentAtomsBigHeading"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ComponentAtomsRichText",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ComponentAtomsLearnMoreButton",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ComponentAtomsImage",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UploadFile",
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "Float",
        "possibleTypes": null
      },
      {
        "kind": "UNION",
        "name": "Morph",
        "possibleTypes": [
          {
            "name": "UsersPermissionsMe"
          },
          {
            "name": "UsersPermissionsMeRole"
          },
          {
            "name": "UsersPermissionsLoginPayload"
          },
          {
            "name": "ForgotPassword"
          },
          {
            "name": "ExternalLinks"
          },
          {
            "name": "ExternalLinksConnection"
          },
          {
            "name": "ExternalLinksAggregator"
          },
          {
            "name": "ExternalLinksGroupBy"
          },
          {
            "name": "ExternalLinksConnectionId"
          },
          {
            "name": "ExternalLinksConnectionCreated_at"
          },
          {
            "name": "ExternalLinksConnectionUpdated_at"
          },
          {
            "name": "ExternalLinksConnectionName"
          },
          {
            "name": "ExternalLinksConnectionURL"
          },
          {
            "name": "createExternalLinkPayload"
          },
          {
            "name": "updateExternalLinkPayload"
          },
          {
            "name": "deleteExternalLinkPayload"
          },
          {
            "name": "Home"
          },
          {
            "name": "updateHomePayload"
          },
          {
            "name": "deleteHomePayload"
          },
          {
            "name": "Page"
          },
          {
            "name": "PageConnection"
          },
          {
            "name": "PageAggregator"
          },
          {
            "name": "PageGroupBy"
          },
          {
            "name": "PageConnectionId"
          },
          {
            "name": "PageConnectionCreated_at"
          },
          {
            "name": "PageConnectionUpdated_at"
          },
          {
            "name": "PageConnectionTitle"
          },
          {
            "name": "PageConnectionShare_image"
          },
          {
            "name": "PageConnectionSlug"
          },
          {
            "name": "createPagePayload"
          },
          {
            "name": "updatePagePayload"
          },
          {
            "name": "deletePagePayload"
          },
          {
            "name": "Tag"
          },
          {
            "name": "TagConnection"
          },
          {
            "name": "TagAggregator"
          },
          {
            "name": "TagGroupBy"
          },
          {
            "name": "TagConnectionId"
          },
          {
            "name": "TagConnectionCreated_at"
          },
          {
            "name": "TagConnectionUpdated_at"
          },
          {
            "name": "TagConnectionName"
          },
          {
            "name": "createTagPayload"
          },
          {
            "name": "updateTagPayload"
          },
          {
            "name": "deleteTagPayload"
          },
          {
            "name": "WebsiteInformation"
          },
          {
            "name": "updateWebsiteInformationPayload"
          },
          {
            "name": "deleteWebsiteInformationPayload"
          },
          {
            "name": "UploadFile"
          },
          {
            "name": "UploadFileConnection"
          },
          {
            "name": "UploadFileAggregator"
          },
          {
            "name": "UploadFileGroupBy"
          },
          {
            "name": "UploadFileConnectionId"
          },
          {
            "name": "UploadFileConnectionCreated_at"
          },
          {
            "name": "UploadFileConnectionUpdated_at"
          },
          {
            "name": "UploadFileConnectionName"
          },
          {
            "name": "UploadFileConnectionHash"
          },
          {
            "name": "UploadFileConnectionSha256"
          },
          {
            "name": "UploadFileConnectionExt"
          },
          {
            "name": "UploadFileConnectionMime"
          },
          {
            "name": "UploadFileConnectionSize"
          },
          {
            "name": "UploadFileConnectionUrl"
          },
          {
            "name": "UploadFileConnectionProvider"
          },
          {
            "name": "UploadFileConnectionProvider_metadata"
          },
          {
            "name": "createFilePayload"
          },
          {
            "name": "updateFilePayload"
          },
          {
            "name": "deleteFilePayload"
          },
          {
            "name": "UsersPermissionsPermission"
          },
          {
            "name": "UsersPermissionsRole"
          },
          {
            "name": "UsersPermissionsRoleConnection"
          },
          {
            "name": "UsersPermissionsRoleAggregator"
          },
          {
            "name": "UsersPermissionsRoleGroupBy"
          },
          {
            "name": "UsersPermissionsRoleConnectionId"
          },
          {
            "name": "UsersPermissionsRoleConnectionName"
          },
          {
            "name": "UsersPermissionsRoleConnectionDescription"
          },
          {
            "name": "UsersPermissionsRoleConnectionType"
          },
          {
            "name": "createRolePayload"
          },
          {
            "name": "updateRolePayload"
          },
          {
            "name": "deleteRolePayload"
          },
          {
            "name": "UsersPermissionsUser"
          },
          {
            "name": "UsersPermissionsUserConnection"
          },
          {
            "name": "UsersPermissionsUserAggregator"
          },
          {
            "name": "UsersPermissionsUserGroupBy"
          },
          {
            "name": "UsersPermissionsUserConnectionId"
          },
          {
            "name": "UsersPermissionsUserConnectionCreated_at"
          },
          {
            "name": "UsersPermissionsUserConnectionUpdated_at"
          },
          {
            "name": "UsersPermissionsUserConnectionUsername"
          },
          {
            "name": "UsersPermissionsUserConnectionEmail"
          },
          {
            "name": "UsersPermissionsUserConnectionProvider"
          },
          {
            "name": "UsersPermissionsUserConnectionConfirmed"
          },
          {
            "name": "UsersPermissionsUserConnectionBlocked"
          },
          {
            "name": "UsersPermissionsUserConnectionRole"
          },
          {
            "name": "createUserPayload"
          },
          {
            "name": "updateUserPayload"
          },
          {
            "name": "deleteUserPayload"
          },
          {
            "name": "ComponentAtomsBigHeading"
          },
          {
            "name": "ComponentAtomsContact"
          },
          {
            "name": "ComponentAtomsDocument"
          },
          {
            "name": "ComponentAtomsImage"
          },
          {
            "name": "ComponentAtomsLearnMoreButton"
          },
          {
            "name": "ComponentAtomsMediumHeading"
          },
          {
            "name": "ComponentAtomsRichText"
          },
          {
            "name": "ComponentAtomsText"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsMe",
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "Boolean",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsMeRole",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsLoginPayload",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ForgotPassword",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "createExternalLinkPayload",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "updateExternalLinkPayload",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "deleteExternalLinkPayload",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "updateHomePayload",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "deleteHomePayload",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Page",
        "possibleTypes": null
      },
      {
        "kind": "UNION",
        "name": "PageContentDynamicZone",
        "possibleTypes": [
          {
            "name": "ComponentAtomsText"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ComponentAtomsText",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Tag",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "PageConnection",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "PageGroupBy",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "PageConnectionId",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "PageConnectionCreated_at",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "PageConnectionUpdated_at",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "PageConnectionTitle",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "PageConnectionShare_image",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "PageConnectionSlug",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "PageAggregator",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "createPagePayload",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "updatePagePayload",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "deletePagePayload",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TagConnection",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TagGroupBy",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TagConnectionId",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TagConnectionCreated_at",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TagConnectionUpdated_at",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TagConnectionName",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "TagAggregator",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "createTagPayload",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "updateTagPayload",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "deleteTagPayload",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "WebsiteInformation",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ComponentAtomsContact",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "updateWebsiteInformationPayload",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "deleteWebsiteInformationPayload",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UploadFileConnection",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UploadFileGroupBy",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UploadFileConnectionId",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UploadFileConnectionCreated_at",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UploadFileConnectionUpdated_at",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UploadFileConnectionName",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UploadFileConnectionHash",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UploadFileConnectionSha256",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UploadFileConnectionExt",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UploadFileConnectionMime",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UploadFileConnectionSize",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UploadFileConnectionUrl",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UploadFileConnectionProvider",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UploadFileConnectionProvider_metadata",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UploadFileAggregator",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "createFilePayload",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "updateFilePayload",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "deleteFilePayload",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsPermission",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsRole",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsUser",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsRoleConnection",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsRoleGroupBy",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsRoleConnectionId",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsRoleConnectionName",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsRoleConnectionDescription",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsRoleConnectionType",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsRoleAggregator",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "createRolePayload",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "updateRolePayload",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "deleteRolePayload",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsUserConnection",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsUserGroupBy",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsUserConnectionId",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsUserConnectionCreated_at",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsUserConnectionUpdated_at",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsUserConnectionUsername",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsUserConnectionEmail",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsUserConnectionProvider",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsUserConnectionConfirmed",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsUserConnectionBlocked",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsUserConnectionRole",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "UsersPermissionsUserAggregator",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "createUserPayload",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "updateUserPayload",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "deleteUserPayload",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ComponentAtomsBigHeading",
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "ENUM_COMPONENTATOMSBIGHEADING_SIZE",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ComponentAtomsDocument",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "ComponentAtomsMediumHeading",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "createExternalLinkInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ExternalLinkInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "updateExternalLinkInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "InputID",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "editExternalLinkInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "deleteExternalLinkInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "updateHomeInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "editHomeInput",
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "HomeBlocksDynamicZoneInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "createPageInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PageInput",
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "PageContentDynamicZoneInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "updatePageInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "editPageInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "deletePageInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "createTagInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "TagInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "updateTagInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "editTagInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "deleteTagInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "updateWebsiteInformationInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "editWebsiteInformationInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "editComponentAtomsContactInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "createRoleInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "RoleInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "updateRoleInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "editRoleInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "deleteRoleInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "createUserInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "updateUserInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "editUserInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "deleteUserInput",
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "Upload",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UsersPermissionsLoginInput",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__Schema",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__Type",
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "__TypeKind",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__Field",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__InputValue",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__EnumValue",
        "possibleTypes": null
      },
      {
        "kind": "OBJECT",
        "name": "__Directive",
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "__DirectiveLocation",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "HomeInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "WebsiteInformationInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ComponentAtomsContactInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FileInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "editFileInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "createFileInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "updateFileInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "deleteFileInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ComponentAtomsBigHeadingInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "editComponentAtomsBigHeadingInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ComponentAtomsDocumentInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "editComponentAtomsDocumentInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ComponentAtomsImageInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "editComponentAtomsImageInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ComponentAtomsLearnMoreButtonInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "editComponentAtomsLearnMoreButtonInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ComponentAtomsMediumHeadingInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "editComponentAtomsMediumHeadingInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ComponentAtomsRichTextInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "editComponentAtomsRichTextInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ComponentAtomsTextInput",
        "possibleTypes": null
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "editComponentAtomsTextInput",
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "Time",
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "Date",
        "possibleTypes": null
      },
      {
        "kind": "SCALAR",
        "name": "Long",
        "possibleTypes": null
      },
      {
        "kind": "ENUM",
        "name": "CacheControlScope",
        "possibleTypes": null
      }
    ]
  }
}