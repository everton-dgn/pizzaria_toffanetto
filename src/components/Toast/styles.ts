import styled from 'styled-components'
import { s } from 'theme'
import { ExclamationTriangle, CheckCircleFill } from '@styled-icons/bootstrap'
import { ToastContainer } from 'react-toastify'

export const ToastAlertContainer = styled(ToastContainer)`
  .Toastify__toast--error {
    background-color: #fff;
    //border-left: 0.5rem solid ${s.bgError};

    b {
      color: ${s.textErrorColor};
    }

    .Toastify__progress-bar {
      background: ${s.bgError};
    }
  }

  .Toastify__toast--success {
    background-color: #fff;
    //border-left: 0.5rem solid ${s.bgSuccess};

    b {
      color: ${s.textSecondary};
    }

    .Toastify__progress-bar {
      background: ${s.bgSuccess};
    }
  }

  .Toastify__progress-bar {
    //background: ${s.bgProgressBar};
    height: 0.4rem;
  }

  .Toastify__toast-body {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    color: #374151;

    b {
      margin-right: 0.5rem;
      font-weight: 600;
      font-size: 1.8rem;
      text-transform: uppercase;
    }
  }
`
export const IconError = styled(ExclamationTriangle)`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  margin-top: 0.2rem;
  color: ${s.errorColor};
`

export const IconSuccess = styled(CheckCircleFill)`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  margin-top: 0.2rem;
  color: ${s.textSecondary};
`
