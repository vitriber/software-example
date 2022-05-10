
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('@prisma/client/runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.8.1
 * Query Engine version: efdf9b1183dddfd4258cd181a72125755215ab7b
 */
Prisma.prismaVersion = {
  client: "3.8.1",
  engine: "efdf9b1183dddfd4258cd181a72125755215ab7b"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.Berth_productsScalarFieldEnum = makeEnum({
  id: 'id',
  loadingCapacity: 'loadingCapacity',
  unloadingCapacity: 'unloadingCapacity',
  berthId: 'berthId',
  productId: 'productId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
});

exports.Prisma.BerthsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  portId: 'portId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  maxDraft: 'maxDraft',
  airDraft: 'airDraft',
  maxLengthOverall: 'maxLengthOverall',
  maxDeadWeightTonnage: 'maxDeadWeightTonnage',
  maxBeam: 'maxBeam',
  waterDensity: 'waterDensity'
});

exports.Prisma.Checklist_itemsScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  shippingStatus: 'shippingStatus',
  stage: 'stage',
  shortDescription: 'shortDescription',
  longDescription: 'longDescription',
  inputType: 'inputType',
  durationHours: 'durationHours',
  order: 'order',
  checklistId: 'checklistId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  parentId: 'parentId'
});

exports.Prisma.Checklist_port_itemsScalarFieldEnum = makeEnum({
  id: 'id',
  activated: 'activated',
  portId: 'portId',
  checklistItemId: 'checklistItemId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
});

exports.Prisma.ChecklistsScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
});

exports.Prisma.Checklist_shipping_item_commentariesScalarFieldEnum = makeEnum({
  id: 'id',
  commentary: 'commentary',
  userId: 'userId',
  checklistShippingItemId: 'checklistShippingItemId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
});

exports.Prisma.Checklist_shipping_item_filesScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  filename: 'filename',
  originalName: 'originalName',
  checklistShippingItemId: 'checklistShippingItemId',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
});

exports.Prisma.Checklist_shipping_itemsScalarFieldEnum = makeEnum({
  id: 'id',
  shippingStatus: 'shippingStatus',
  value: 'value',
  title: 'title',
  stage: 'stage',
  shortDescription: 'shortDescription',
  longDescription: 'longDescription',
  inputType: 'inputType',
  durationHours: 'durationHours',
  activated: 'activated',
  status: 'status',
  order: 'order',
  shippingId: 'shippingId',
  updatedByUserId: 'updatedByUserId',
  templateChecklistPortItemId: 'templateChecklistPortItemId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  parentId: 'parentId'
});

exports.Prisma.CountriesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  flag: 'flag',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
});

exports.Prisma.MigrationsScalarFieldEnum = makeEnum({
  id: 'id',
  timestamp: 'timestamp',
  name: 'name'
});

exports.Prisma.Port_filesScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  filename: 'filename',
  originalName: 'originalName',
  portId: 'portId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
});

exports.Prisma.PortsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  countryId: 'countryId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  slug: 'slug'
});

exports.Prisma.ProductsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
});

exports.Prisma.Proforma_filesScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  filename: 'filename',
  originalName: 'originalName',
  proformaId: 'proformaId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
});

exports.Prisma.ProformasScalarFieldEnum = makeEnum({
  id: 'id',
  taxes: 'taxes',
  totalValue: 'totalValue',
  berthedHours: 'berthedHours',
  berthProductId: 'berthProductId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  idHash: 'idHash',
  applicantName: 'applicantName',
  applicantEmail: 'applicantEmail',
  vesselName: 'vesselName',
  imo: 'imo',
  deadWeightTonnage: 'deadWeightTonnage',
  lengthOverall: 'lengthOverall',
  grossTonnage: 'grossTonnage',
  package: 'package',
  builtYear: 'builtYear',
  agencyType: 'agencyType',
  operationType: 'operationType',
  productTonnage: 'productTonnage',
  usd: 'usd',
  isCargillInternational: 'isCargillInternational',
  beam: 'beam',
  etb: 'etb',
  draft: 'draft',
  requestingCustomer: 'requestingCustomer',
  vesselType: 'vesselType'
});

exports.Prisma.Shipping_documentsScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  documentNumber: 'documentNumber',
  consignee: 'consignee',
  vesselName: 'vesselName',
  portOfLoading: 'portOfLoading',
  portOfDischarge: 'portOfDischarge',
  notify: 'notify',
  productName: 'productName',
  productNameExtraInfo: 'productNameExtraInfo',
  productWeightExtraInfo: 'productWeightExtraInfo',
  freightType: 'freightType',
  charterPartyDate: 'charterPartyDate',
  shipBoardedDate: 'shipBoardedDate',
  issuePlaceDate: 'issuePlaceDate',
  numberOfOriginalBillOfLanding: 'numberOfOriginalBillOfLanding',
  shipper: 'shipper',
  masterName: 'masterName',
  signature: 'signature',
  shippingId: 'shippingId',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  order: 'order',
  subsetId: 'subsetId',
  productGrossWeight: 'productGrossWeight'
});

exports.Prisma.Shipping_filesScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  filename: 'filename',
  originalName: 'originalName',
  shippingId: 'shippingId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  userId: 'userId'
});

exports.Prisma.Shipping_portsScalarFieldEnum = makeEnum({
  id: 'id',
  estimatedTimeOfArrival: 'estimatedTimeOfArrival',
  estimatedTimeOfBerthing: 'estimatedTimeOfBerthing',
  estimatedTimeOfSailing: 'estimatedTimeOfSailing',
  timeOfArrival: 'timeOfArrival',
  timeOfBerthing: 'timeOfBerthing',
  timeOfSailing: 'timeOfSailing',
  shippingId: 'shippingId',
  portId: 'portId',
  berthId: 'berthId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
});

exports.Prisma.Shipping_productsScalarFieldEnum = makeEnum({
  id: 'id',
  weight: 'weight',
  shippingId: 'shippingId',
  productId: 'productId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
});

exports.Prisma.ShippingsScalarFieldEnum = makeEnum({
  id: 'id',
  status: 'status',
  ownerHeadName: 'ownerHeadName',
  ownerHeadAddress: 'ownerHeadAddress',
  disponentOwner: 'disponentOwner',
  charterName: 'charterName',
  masterName: 'masterName',
  masterEmail: 'masterEmail',
  estimatedDraftArrival: 'estimatedDraftArrival',
  estimatedDraftDeparture: 'estimatedDraftDeparture',
  vesselOperator: 'vesselOperator',
  vesselOperatorEmail: 'vesselOperatorEmail',
  operationType: 'operationType',
  isAppointmentConfirmed: 'isAppointmentConfirmed',
  agencyType: 'agencyType',
  voyageNumber: 'voyageNumber',
  externalCode: 'externalCode',
  comments: 'comments',
  lastPort: 'lastPort',
  nextPort: 'nextPort',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  vesselId: 'vesselId',
  userId: 'userId',
  vesselOldValues: 'vesselOldValues',
  totalLoadExpected: 'totalLoadExpected',
  totalLoadActual: 'totalLoadActual'
});

exports.Prisma.SubsetsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  shippingId: 'shippingId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
});

exports.Prisma.User_filesScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  filename: 'filename',
  originalName: 'originalName',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
});

exports.Prisma.UsersScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
});

exports.Prisma.Vessel_filesScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  filename: 'filename',
  originalName: 'originalName',
  vesselId: 'vesselId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
});

exports.Prisma.VesselsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  imo: 'imo',
  call_sign: 'call_sign',
  satellite_telephone: 'satellite_telephone',
  classification_society: 'classification_society',
  type: 'type',
  length_overall: 'length_overall',
  dead_weight_tonnage: 'dead_weight_tonnage',
  beam: 'beam',
  cubic_meters: 'cubic_meters',
  gross_tonnage: 'gross_tonnage',
  net_tonnage: 'net_tonnage',
  panama_gross_tonnage: 'panama_gross_tonnage',
  panama_net_tonnage: 'panama_net_tonnage',
  suez_gross_tonnage: 'suez_gross_tonnage',
  suez_net_tonnage: 'suez_net_tonnage',
  reduced_gross_tonnage: 'reduced_gross_tonnage',
  length_between_perpendiculars: 'length_between_perpendiculars',
  molded_depth: 'molded_depth',
  number_of_holds: 'number_of_holds',
  number_of_tanks: 'number_of_tanks',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  country_id: 'country_id',
  draft_sw: 'draft_sw',
  built_year: 'built_year'
});

exports.Prisma.InquiresScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  type: 'type',
  shipping_id: 'shipping_id',
  updated_by_user_id: 'updated_by_user_id'
});

exports.Prisma.Inquires_commentsScalarFieldEnum = makeEnum({
  id: 'id',
  body: 'body',
  is_done: 'is_done',
  inquire_id: 'inquire_id',
  user_id: 'user_id'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});


exports.Prisma.ModelName = makeEnum({
  berth_products: 'berth_products',
  berths: 'berths',
  checklist_items: 'checklist_items',
  checklist_port_items: 'checklist_port_items',
  checklists: 'checklists',
  checklist_shipping_item_commentaries: 'checklist_shipping_item_commentaries',
  checklist_shipping_item_files: 'checklist_shipping_item_files',
  checklist_shipping_items: 'checklist_shipping_items',
  countries: 'countries',
  migrations: 'migrations',
  port_files: 'port_files',
  ports: 'ports',
  products: 'products',
  proforma_files: 'proforma_files',
  proformas: 'proformas',
  shipping_documents: 'shipping_documents',
  shipping_files: 'shipping_files',
  shipping_ports: 'shipping_ports',
  shipping_products: 'shipping_products',
  shippings: 'shippings',
  subsets: 'subsets',
  user_files: 'user_files',
  users: 'users',
  vessel_files: 'vessel_files',
  vessels: 'vessels',
  inquires: 'inquires',
  inquires_comments: 'inquires_comments'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
