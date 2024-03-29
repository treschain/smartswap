import React, { useState, useCallback } from "react";
import {
  Box,
  Flex,
  Text,
  Img,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import MATICLOGO from "../../../../assets/Matic.svg";
import PHXLOGO from "../../../../assets/phx2.png";
import DOGELOGO from "../../../../assets/dogechain.png";
import { useActiveWeb3React } from "../../../../utils/hooks/useActiveWeb3React";

const BridgeCard = () => {
  const backgroundColor = useColorModeValue("#DCD9FA", "#1F1933");
  const oasisbgColor = useColorModeValue("#EBF7FF", "#00304D");
  const oasisTextColor = useColorModeValue("#0089DB", "#66C6FF");
  const textColor = useColorModeValue("#8247E5", "#A479EC");
  const { chainId } = useActiveWeb3React();

  return (
    <>
      {chainId === 137 ||
        chainId === 80001 ? (
        <Box
          mt={5}
          h='86px'
          pt={4}
          px={3}
          fontWeight='400'
          borderRadius='6px'
          backgroundColor={
            chainId === 137 || chainId === 80001 
              ? backgroundColor
              : oasisbgColor
          }
        >
          <Flex alignItems='center' justifyContent='space-between'>
            <Flex alignItems='center'>
              <Img
                w='28px'
                h='28px'
                src={
                  chainId === 137 || chainId === 80001 ? MATICLOGO : DOGELOGO
                }
              />
              <Box ml={4}>
                <Text
                  fontWeight='normal'
                  fontSize='16px'
                  color={
                    chainId === 137 || chainId === 80001
                      ? textColor
                      : oasisTextColor
                  }
                  mb={2}
                >
                  {chainId === 137 || chainId === 80001
                    ? "Polygon Token Bridge"
                    : "Deposit tokens on Polygon Network"}
                </Text>
                {chainId === 137 || chainId === 80001 ? (
                  <Text fontWeight='normal' fontSize='14px' color={textColor}>
                    Deposit tokens to the polygon network.
                  </Text>
                ) : (
                  <Text
                    fontWeight='normal'
                    fontSize='14px'
                    color={oasisTextColor}
                  >
                    Powered by{" "}
                    <a
                      href='https://portalbridge.com/#/transfer'
                      style={{ textDecoration: "underline" }}
                      target='_blank'
                    >
                      Wormhole
                    </a>
                  </Text>
                )}
              </Box>
            </Flex>
            <Link
              href={
                chainId === 137 || chainId === 80001
                  ? "https://wallet.polygon.technology/bridge"
                  : "https://portalbridge.com/#/transfer"
              }
              isExternal
            >
              <ExternalLinkIcon
                w='28px'
                color={
                  chainId === 137 || chainId === 80001
                    ? textColor
                    : oasisTextColor
                }
                padding='2px'
                mb={3}
                h='28px'
              />
            </Link>
          </Flex>
        </Box>
      ) : (
        <Box />
      )}
  {chainId === 568 ||
        chainId === 2000 ? (
        <Box
          mt={5}
          h='86px'
          pt={4}
          px={3}
          fontWeight='400'
          borderRadius='6px'
          backgroundColor={
            chainId === 568 || chainId === 2000 
              ? backgroundColor
              : oasisbgColor
          }
        >
          <Flex alignItems='center' justifyContent='space-between'>
            <Flex alignItems='center'>
              <Img
                w='28px'
                h='28px'
                src={
                  chainId === 568 || chainId === 2000 ? DOGELOGO : DOGELOGO
                }
              />
              <Box ml={4}>
                <Text
                  fontWeight='normal'
                  fontSize='16px'
                  color={
                    chainId === 568 || chainId === 2000
                      ? textColor
                      : oasisTextColor
                  }
                  mb={2}
                >
                  {chainId === 568 || chainId === 2000
                    ? "Dogecoin Token Bridge"
                    : "Deposit tokens on Dogechain Network"}
                </Text>
                {chainId === 568 || chainId === 2000 ? (
                  <Text fontWeight='normal' fontSize='14px' color={textColor}>
                    Deposit tokens to the dogechain network.
                  </Text>
                ) : (
                  <Text
                    fontWeight='normal'
                    fontSize='14px'
                    color={oasisTextColor}
                  >
                    Powered by{" "}
                    <a
                      href='https://bridge.dogechain.dog'
                      style={{ textDecoration: "underline" }}
                      target='_blank'
                    >
                      Dogechain
                    </a>
                  </Text>
                )}
              </Box>
            </Flex>
            <Link
              href={
                chainId === 137 || chainId === 80001
                  ? "https://bridge.dogechain.dog"
                  : "https://bridge.dogechain.dog"
              }
              isExternal
            >
              <ExternalLinkIcon
                w='28px'
                color={
                  chainId === 568 || chainId === 2000
                    ? textColor
                    : oasisTextColor
                }
                padding='2px'
                mb={3}
                h='28px'
              />
            </Link>
          </Flex>
        </Box>
      ) : (
        <Box />
      )}
    </>
  );
};

export default BridgeCard;
