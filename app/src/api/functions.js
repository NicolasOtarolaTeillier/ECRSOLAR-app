import { BASE_URL, BASE_URL_OLD, BASE_URL_LEGACY } from './aws'

export const apiFunction_getAllUsers = async db => {
  const result = await fetch(`${BASE_URL}/users/get_all/${db}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  return result
}

export const apiFunction_getAllExpenseControl = async db => {
  const result = await fetch(`${BASE_URL}/expense_control/get_all/${db}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  return result
}

export const apiFunction_updateStatusExpenseControl = async (
  record,
  status,
  db
) => {
  console.log(record)
  const result = await fetch(
    `${BASE_URL}/expense_control/update/status/${db}`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ids: record,
        status: status
      })
    }
  )
  return result
}

export const apiFunction_getAllExpenses = async db => {
  const result = await fetch(`${BASE_URL}/expenses/get_all/${db}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  return result
}

export const apiFunction_updateExpenseControl = async (record, db) => {
  const result = await fetch(`${BASE_URL}/expense_control/update/${db}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(record)
  })
  return result
}

export const apiFunction_newExpenseControl = async (dataTextract, db) => {
  const result = await fetch(`${BASE_URL}/expense_control/new`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataTextract)
  })
  return result
}

export const apiFunction_uploadImageS3 = async data => {
  var urlencoded = new URLSearchParams()
  urlencoded.append('fileExt', data.fileExt)
  urlencoded.append('img', data.img)
  urlencoded.append('imageID', data.imageID)
  var requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: urlencoded,
    redirect: 'follow'
  }
  const result = await fetch(`${BASE_URL}/s3/upload/image`, requestOptions)
  return result
}

export const apiFunction_textTract = async target => {
  const textract_file = await fetch(`${BASE_URL_OLD}/Production/ocr`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application.json'
    },
    body: JSON.stringify(target)
  })
  return textract_file
}

export const apiFunction_getImageS3 = async element => {
  const result = await fetch(
    `${BASE_URL_LEGACY}DownlaodImages/bucket-expense-control-images?file=${element}`,
    {
      method: 'GET'
    }
  )
  return result
}

export const apiFunction_auth = async (data) => {
  var requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }
  console.log('desde function',data)
  const result = await fetch(`${BASE_URL}/auth2`, requestOptions)
  return result
}

export const apiFunction_updateStatusIncomeControl = async (
  ids,
  status,
  db
) => {
  const result = await fetch(`${BASE_URL}/income_control/update/status/${db}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ids: ids,
      status: status
    })
  })
  const a = await result.json()
  return result
}

export const apiFunction_newIncomeControl = async (record, db) => {
  const result = await fetch(`${BASE_URL}/income_control/new/${db}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(record)
  })
  return result
}

export const apiFunction_getAllIncomeControl = async (status, db) => {
  const result = await fetch(`${BASE_URL}/income_control/get_all/${db}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(status)
  })
  return result
}

export const apiFunction_getAllIncomeControlSum = async (status, db) => {
  const result = await fetch(
    `${BASE_URL}/income_control/get_all/sum/income/${db}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(status)
    }
  )
  return result
}

export const apiFunction_getAllExpenseControlSum = async (status_array, db) => {
  const result = await fetch(
    `${BASE_URL}/expense_control/get_all/sum/document_total/${db}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(status_array)
    }
  )
  return result
}

export const apiFunction_getAllExpenseControlBetween = async (data, db) => {
  const result = await fetch(
    `${BASE_URL}/expense_control/get_all/between/dates/${db}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }
  )
  console.log('asdnoseeee', result)
  return result
}
